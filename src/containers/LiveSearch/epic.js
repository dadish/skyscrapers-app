import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { ajax } from 'rxjs/observable/dom/ajax';
import { of as of$ } from 'rxjs/observable/of';
import { concat as concat$ } from 'rxjs/observable/concat';
import { CHANGE_SEARCH_TXT } from './constants';
import {
  suggestionsLookupStart,
  suggestionsLookupEnd,
  suggestionsLookupFail,
} from './actions';

/**
 * Github api url
 */
export const SEARCH_URL = 'https://api.github.com';

/**
 * Github api repositories search path
 */
export const SEARCH_PATH = '/search/repositories';

const liveSearchEpic = action$ =>
  action$

  // debounce 500ms
  .debounceTime(500)

  // process only actions with type CHANGE_SEARCH_TXT and has not empty payload
  .filter(({ payload, type}) => type === CHANGE_SEARCH_TXT && payload)

  // convert each action into several actions that emit
  // start and end (or fail) of the request
  // however we do not want to emit the request end
  // of the first ajax call if there is already a second
  // request in progress. For this reason we use swithcMap.
  // SwitchMap stops emitting items from previos observable when
  // next starts
  .switchMap(action => concat$(

    // first action emits the start of the AJAX call
    of$(suggestionsLookupStart(action.payload)),

    // then we make an AJAX request
    ajax
      .getJSON(`${SEARCH_URL}${SEARCH_PATH}?q=${action.payload} in:title,description,readme`)

      // if AJAX request is successful then we emit
      // end of AJAX call
      .map(suggestionsLookupEnd)

      // If we encounter error we emit AJAX call fail action
      .catch(e => of$(suggestionsLookupFail(e))),
  ));

export default liveSearchEpic;