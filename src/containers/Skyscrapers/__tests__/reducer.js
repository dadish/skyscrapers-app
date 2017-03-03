import reducer, { initialState } from '../reducer';
import listReducer from '../List/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
  updateFilterKeyword,
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

test('updates the keyword with payload on UPDATE_FILTER_KEYWORD action', () => {
  const payload = 'admfsygjbwnla';
  expect(reducer(initialState, updateFilterKeyword(payload)).get('keyword')).toBe(payload);
});

test('updates the keyword according to browser URL query on LOCATION_CHANGE action with POP location action type', () => {
  const keyword = 'esfkbnma/d,gn aldjxngm';
  const action = {
    type: LOCATION_CHANGE,
    payload: {
      action: 'POP',
      query: { keyword }
    }
  };
  expect(reducer(initialState, action).get('keyword')).toBe(keyword);
});

test('does not react on LOCATION_CHANGE action with location action type other than POP', () => {
  const keyword = 'esfkbnma/d,gn aldjxngm';
  const action = {
    type: LOCATION_CHANGE,
    payload: {
      action: 'REPLACE',
      query: { keyword }
    }
  };
  expect(reducer(initialState, action).get('keyword')).not.toBe(keyword);
});

test('sets keyword to empty strin on LOCATION_CHANGE action if there is not keyword query parameter', () => {
  const action = {
    type: LOCATION_CHANGE,
    payload: {
      action: 'POP',
      query: {}
    }
  };
  const state = initialState.set('keyword', 'askhgjf');
  expect(reducer(state, action).get('keyword')).toBe("");
});

test('delegates the AJAX_FETCH_END action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = [];
  reducer(initialState, ajaxFetchEnd(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});