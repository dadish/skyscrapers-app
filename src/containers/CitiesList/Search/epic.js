import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  CHANGE_SEARCH_TXT,
} from '../constants';
import {
  ajaxSearchStart,
  ajaxSearchEnd,
  ajaxSearchFail,
  changeSearchTxt,
} from '../actions';
import { getQuery } from '../schema';

/**
 * CitiesList epic
 * Coordinates the redux side effects
 */
const epic = (action$) => 
  
  action$

    // Emit changeSearchTxt() action once. So cities are preloaded when first 
    // visited
    .merge(new BehaviorSubject(changeSearchTxt(void 0, 'preload')))
    
    // react only to CHANGE_SEARCH_TXT actions
    .ofType(CHANGE_SEARCH_TXT)

    // debounce so that we do not fire AJAX request on every keyup
    .debounceTime(300)

    // convert action stream to the ajax start and end/fail actions
    // we use switchMap that helps us convert the actions and at the same
    // time it automatically unsubscribes the previous observables when new
    // one comes in with values that allows us handle AJAX cancellation
    .switchMap(action => concat$(

      // For each ajax request we fire AJAC_SEARCH_START action
      of$(ajaxSearchStart()),

      // make an ajax request
      ajax({
        url: process.env.REACT_APP_GRAPHQL_URL,
        body: {
          query: getQuery(),
          variables: JSON.stringify({ selector: action.payload ? `title|body*=${action.payload}` : "" })
        },
        method: 'POST',
      })

        // fire AJAX_SEARCH_END action when successfully requested
        .map((xhr) => ajaxSearchEnd(xhr.response))

        // fire AJAC_SEARCH_FAIL action if request is note successful
        .catch(e => of$(ajaxSearchFail(e)))
    ))


export default epic;