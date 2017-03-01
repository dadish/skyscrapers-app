import reducer, { initialState } from '../reducer';
import listReducer from '../List/reducer';
import {
  ajaxSearchStart,
  ajaxSearchEnd,
  ajaxSearchFail,
} from '../actions';

jest.mock('../List/reducer', () => jest.fn());

test('returns the given state untouched if action type is unknown', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('sets the `loading` property to `true` on AJAX_SEARCH_START action', () => {
  expect(initialState.get('loading')).toBe(false);
  expect(reducer(initialState, ajaxSearchStart()).get('loading')).toBe(true);
});

test('sets the `loading` property to `false` on AJAX_SEARCH_END action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, ajaxSearchEnd()).get('loading')).toBe(false);
});

test('sets the `loading` property to `false` on AJAX_SEARCH_FAIL action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, ajaxSearchFail()).get('loading')).toBe(false);
});

test('delegates the AJAX_SEARCH_END action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = [];
  reducer(initialState, ajaxSearchEnd(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});