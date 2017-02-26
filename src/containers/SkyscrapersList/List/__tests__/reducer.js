import reducer, { initialState } from '../reducer';
import {
  ajaxSearchEnd,
} from '../../actions';

const payload = [
  { id: 1, data: 'one'},
  { id: 2, data: 'two'},
  { id: 3, data: 'three'},
];

test('it returns the provided state untouched for unknown actions', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('resets all the list on AJAX_SEARCH_END action', () => {
  const newState = reducer(initialState, ajaxSearchEnd(payload));
  expect(newState.size).toBe(payload.length);
  expect(newState.get(0)).toEqual(payload[0]);
});