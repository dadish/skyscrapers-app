import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { actionTypes } from 'redux-form';
import { push } from 'react-router-redux';
import {
  selectLocationPathname,
  selectLocationSearch,
} from 'containers/App/selectors';
import { selectFilterSelector, selectFilterUrl } from './selectors';
import listEpic from '../List/epic';
import { resetList } from '../actions';

const { CHANGE } = actionTypes;

/**
 * Skyscrapers epic
 * Coordinates the redux side effects
 */
const epic = (action$, store) =>
  action$
    
    // react only to CHANGE actions
    .ofType(CHANGE)

    // debounce so that we do not fire AJAX request on every keyup
    .debounceTime(300)

    // convert action stream to the ajax start and end/fail actions
    // we use switchMap that helps us convert the actions and at the same
    // time it automatically unsubscribes the previous observables when new
    // one comes in with values that allows us handle AJAX cancellation
    .switchMap(() => {
      const state = store.getState();
      const pathname = selectLocationPathname()(state);
      const selector = selectFilterSelector()(state);
      const searchStr = selectLocationSearch()(state);
      const filterStr = selectFilterUrl()(state);

      // only renew the skyscrapers list if filter and url have the
      // same state
      if (`${pathname}${searchStr}` === filterStr) {
        return concat$(
          of$(resetList()),
          listEpic(selector),
        );
      }

      // if filterForm data and url search query have different state
      // then after we renew the skyscrapers list, we also udpate the
      // url to support filtering with url
      return concat$(
        of$(resetList()),
        listEpic(selector),
        of$(push(filterStr)),
      );
    });

export default epic;