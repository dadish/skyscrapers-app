import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import { push } from 'react-router-redux';
import {
  CHANGE_SEARCH_TXT,
  AJAX_FETCH_END,
} from '../constants';
import listEpic from '../List/epic';

/**
 * SkyscrapersList epic
 * Coordinates the redux side effects
 */
const epic = (action$) => 
  
  action$
    
    // react only to CHANGE_SEARCH_TXT actions
    .ofType(CHANGE_SEARCH_TXT)

    // debounce so that we do not fire AJAX request on every keyup
    .debounceTime(300)

    // convert action stream to the ajax start and end/fail actions
    // we use switchMap that helps us convert the actions and at the same
    // time it automatically unsubscribes the previous observables when new
    // one comes in with values that allows us handle AJAX cancellation
    .switchMap(({ payload }) =>  
      listEpic({ searchTxt: payload })
        .mergeMap(action => {
          const actionsList = [action];
          if (action.type !== AJAX_FETCH_END) return actionsList;
          let newLocation = '/';
          if (payload) newLocation += `?searchTxt=${payload}`;
          actionsList.push(push(newLocation));
          return actionsList;
        })
    )

export default epic;