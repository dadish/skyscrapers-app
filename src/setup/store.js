/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  
  /**
   * NOTE
   * We use ReplaySubject because we do not have initial epic. 
   * If you need to include initial(default, global...) epic, 
   * then just change ReplaySubject with BehaviorSubject and you
   * should be good to go.
   */
  const epic$ = new ReplaySubject();

  const rootEpic = (action$, store) => 
    epic$
      .mergeMap(epic => epic(action$, store));

  // Create the store with two middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state
  // 2. epicMiddleware: Provides redux-observable side-effects handling with RXJS
  const middlewares = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  /**
   * Async code loading
   */
  store.epic$ = epic$; // epics injector
  store.asyncEpics = {}; // Epics registry
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
