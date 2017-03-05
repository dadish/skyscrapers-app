import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { actionTypes } from 'redux-form';
import { push } from 'react-router-redux';
import { selectFilterSelector, selectFilterUrl } from './selectors';
import listEpic from '../List/epic';

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
      const selector = selectFilterSelector()(store.getState());
      return concat$(
        listEpic(selector),
        of$(push(selectFilterUrl()(store.getState()))),
      );
    });

export default epic;