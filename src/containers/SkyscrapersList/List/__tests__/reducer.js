import reducer, { initialState } from '../reducer';
import {
  ajaxFetchEnd,
} from '../../actions';

const list = [
  { id: 1, data: 'one'},
  { id: 2, data: 'two'},
  { id: 3, data: 'three'},
];

const payload = {
  data: {
    skyscraper: {
      list
    }
  }
};

test('it returns the provided state untouched for unknown actions', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('resets all the list on AJAX_FETCH_END action', () => {
  const newState = reducer(initialState, ajaxFetchEnd(payload));
  expect(newState.size).toBe(list.length);
  expect(newState.get(0).toJS()).toEqual(list[0]);
});