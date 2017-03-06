import reducer, { initialState } from '../reducer';
import listReducer from '../List/reducer';
import {
  ajaxFetchEnd,
  changeFilterTxt,
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

test('updates the `filterTxt` property on CHANGE_FILTER_TXT action', () => {
  const filterTxt = 'wasj,bnfqdfzdgkfguqeil';
  const state = reducer(initialState, changeFilterTxt(filterTxt));
  expect(state.get('filterTxt')).toBe(filterTxt);
});