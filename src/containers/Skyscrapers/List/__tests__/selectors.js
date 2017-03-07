import { fromJS } from 'immutable';
import {
  selectList,
  selectImagelessWikipediaIds,
} from '../selectors';

const list = [
  { id: "1234", wikipedia_id: 123423, title: 'The awesome skyscraper!'},
  { id: "2334", wikipedia_id: 233423, title: 'Not so awesome skyscraper!', images: []},
  { id: "1434", wikipedia_id: 143423, title: 'The awesome skyscraper!'},
  { id: "2534", wikipedia_id: 253423, title: 'Not so awesome skyscraper!', images: []},
  { id: "1634", wikipedia_id: 163423, title: 'The awesome skyscraper!'},
  { id: "2734", wikipedia_id: 273423, title: 'Not so awesome skyscraper!', images: []},  
];

const state = fromJS({
  skyscrapers: {
    list,
  },
});

test('selectList selects [`skyscrapers`, `list`]', () => {
  expect(selectList()(state).toJS()).toEqual(list);
});

test('selectImagelessWikipediaIds selects skyscrapers with falsy `image` field', () => {
  expect(selectImagelessWikipediaIds()(state).size).toBe(3);
  expect(selectImagelessWikipediaIds()(state).get(0)).toBe(123423);
});