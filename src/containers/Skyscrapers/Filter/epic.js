import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import { push } from 'react-router-redux';
import {
  UPDATE_FILTER_KEYWORD,
  AJAX_FETCH_END,
} from '../constants';
import { selectKeyword } from '../selectors';
import listEpic from '../List/epic';

/**
 * Skyscrapers epic
 * Coordinates the redux side effects
 */
const epic = (action$, store) => 
  
  action$
    
    // react only to UPDATE_FILTER_KEYWORD actions
    .ofType(UPDATE_FILTER_KEYWORD)

    // debounce so that we do not fire AJAX request on every keyup
    .debounceTime(300)

    // convert action stream to the ajax start and end/fail actions
    // we use switchMap that helps us convert the actions and at the same
    // time it automatically unsubscribes the previous observables when new
    // one comes in with values that allows us handle AJAX cancellation
    .switchMap(() => {
      const keyword = selectKeyword()(store.getState());
      return listEpic({ keyword })
        .mergeMap(action => {
          const actionsList = [action];
          if (action.type !== AJAX_FETCH_END) return actionsList;
          let newLocation = '/';
          if (keyword) newLocation += `?keyword=${keyword}`;
          actionsList.push(push(newLocation));
          return actionsList;
        });
      }
    )

export default epic;