import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { fromEvent as fromEvent$ } from 'rxjs/observable/fromEvent';
import { empty as empty$ } from 'rxjs/observable/empty';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { ajaxGetImages } from 'containers/Images/actions';
import { selectFilterSelector } from '../Filter/selectors';
import {
  selectListTotal,
  selectListLimit,
  selectListStart,
  selectPopups,
} from '../selectors';
import * as c from '../constants';
import * as a from '../actions';
import query from '../schema';

const listEpic = (selector = "") =>
  concat$(

    // For each ajax request we fire AJAC_FILTER_START action
    of$(a.ajaxFetchStart()),

    // make an ajax request
    ajax({
      url: process.env.REACT_APP_GRAPHQL_URL,
      body: {
        query: query,
        variables: JSON.stringify({ selector })
      },
      method: 'POST',
    })

      // fire AJAX_FETCH_END action when successfully requested
      .mergeMap((xhr) => concat$(
        of$(a.ajaxFetchEnd(xhr.response)),
        of$(ajaxGetImages(c.NAME)),
        ))

      // fire AJAC_FILTER_FAIL action if request is note successful
      .catch(e => of$(a.ajaxFetchFail(e)))
  );

export const scrollEpic = combineEpics(
  // dispatch HIT_BOTTOM action when user get to the bottom
  // of the list
  () => fromEvent$(window, 'scroll')
    .filter(() => window.scrollY + window.innerHeight >= document.body.scrollHeight - 10)
    .mapTo(a.hitBottom()),
  
  // if there are any open popups dispatch HIDE_ALL_POPUPS action when user scrolls the page
  (_, store) => fromEvent$(window, 'scroll')
    .filter(() => selectPopups()(store.getState()).size > 0)
    .mapTo(a.hideAllPopups())

);

export const appendEpic = (action$, store) =>
  action$
    .ofType(c.HIT_BOTTOM)
    .exhaustMap(() => {
      const state = store.getState();
      let selector = selectFilterSelector()(state);
      const total = selectListTotal()(state);
      const limit = selectListLimit()(state);
      const start = selectListStart()(state);
      if (total <= start + limit) return empty$();
      selector += `, start=${start + limit}`;
      return listEpic(selector);
    })
  
export default listEpic;