import reducer, { initialState } from '../reducer';
import itemReducer from '../itemReducer';
import {
  ajaxFetchEnd,
} from '../../actions';

const list = [
  { id: 1, title: 'one'},
  { id: 2, title: 'two'},
  { id: 3, title: 'three'},
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
  expect(newState.get(0)).toEqual(itemReducer(undefined, ajaxFetchEnd(list[0])));
});