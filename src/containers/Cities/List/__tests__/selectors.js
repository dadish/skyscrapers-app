import { fromJS } from 'immutable';
import {
  selectList,
  selectFilteredList,
} from '../selectors';

const list = [
  {id: '1234', title: 'Some text' },
  {id: '1334', title: 'Some more text' },
  {id: '1354', title: 'Some more TeXt' },
  {id: '1434', title: 'The world is mine' },
  {id: '1534', title: 'People are awsome' },
  {id: '1634', title: 'Testing is super fun!' },
];

let filterTxt = '';

const state = fromJS({
  cities: {
    list,
    filterTxt,
  },
});

test('selectList selects [`cities`, `list`]', () => {
  expect(selectList()(state).toJS()).toEqual(list);
});

test('selectFilteredList returs a List of all city items if `filterTxt` is empty', () => {
  filterTxt = '';
  expect(selectFilteredList()(state).size).toBe(list.length);
});

test('selectFilteredList returns a List of city items whose title contains the `filterTxt` (case insensitive)', () => {
  const newState = state.setIn(['cities', 'filterTxt'], 'text');
  const filteredList = selectFilteredList()(newState);
  expect(filteredList.size).toBe(3);
  expect(filteredList.get(0).get('id')).toBe('1234');
  expect(filteredList.get(2).get('id')).toBe('1354');
});