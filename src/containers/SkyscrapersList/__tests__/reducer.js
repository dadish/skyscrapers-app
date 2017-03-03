import reducer, { initialState } from '../reducer';
import listReducer from '../List/reducer';
import {
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
  changeSearchTxt,
} from '../actions';

jest.mock('../List/reducer', () => jest.fn());

test('returns the given state untouched if action type is unknown', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('sets the `loading` property to `true` on AJAX_FETCH_START action', () => {
  expect(initialState.get('loading')).toBe(false);
  expect(reducer(initialState, ajaxFetchStart()).get('loading')).toBe(true);
});

test('sets the `loading` property to `false` on AJAX_FETCH_END action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, ajaxFetchEnd()).get('loading')).toBe(false);
});

test('sets the `loading` property to `false` on AJAX_FETCH_FAIL action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, ajaxFetchFail()).get('loading')).toBe(false);
});

test('updates the searchTxt with payload on CHANGE_SEARCH_TXT action', () => {
  const payload = 'admfsygjbwnla';
  expect(reducer(initialState, changeSearchTxt(payload)).get('searchTxt')).toBe(payload);
});

test('delegates the AJAX_FETCH_END action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = [];
  reducer(initialState, ajaxFetchEnd(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});