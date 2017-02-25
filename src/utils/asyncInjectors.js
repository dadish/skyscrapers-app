import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import invariant from 'invariant';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import createReducer from 'setup/reducers';

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    asyncReducers: isObject,
    epic$: (epic$) => epic$ instanceof ReplaySubject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) asyncInjectors: Expected a valid redux store'
  );
}

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store, isValid) {
  return function injectReducer(name, asyncReducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncReducer),
      '(src/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
    );

    if (Reflect.has(store.asyncReducers, name)) return;

    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Inject an asynchronously loaded epic 
 */
export function injectAsyncEpic(store, isValid) {
  return function injectReducer(name, asyncEpic) {
    if (!isValid) checkStore(store);

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncEpic),
      '(src/utils...) injectAsyncEpic: Expected `asyncEpic` to be an epic function'
    );

    if (Reflect.has(store.asyncEpics, name)) return;
    store.asyncEpics[name] = asyncEpic; // eslint-disable-line no-param-reassign
    store.epic$.next(asyncEpic);
  };
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectAsyncReducer(store, true),
    injectEpic: injectAsyncEpic(store, true),
  };
}
