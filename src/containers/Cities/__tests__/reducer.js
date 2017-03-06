import reducer, { initialState } from '../reducer';
import listReducer from '../List/reducer';
import {
  ajaxFetchEnd,
} from '../actions';

jest.mock('../List/reducer', () => jest.fn());

test('returns the given state untouched if action type is unknown', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('delegates the AJAX_FETCH_END action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = [];
  reducer(initialState, ajaxFetchEnd(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});