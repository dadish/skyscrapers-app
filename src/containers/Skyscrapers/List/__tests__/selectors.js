import { fromJS } from 'immutable';
import {
  selectList,
  selectItemsWithoutImages,
} from '../selectors';

const list = [
  { id: "1234", title: 'The awesome skyscraper!'},
  { id: "2334", title: 'Not so awesome skyscraper!', image: 'https://wikipedia.org/my_image,jpg'},
  { id: "1434", title: 'The awesome skyscraper!'},
  { id: "2534", title: 'Not so awesome skyscraper!', image: 'https://wikipedia.org/my_image,jpg'},
  { id: "1634", title: 'The awesome skyscraper!'},
  { id: "2734", title: 'Not so awesome skyscraper!', image: 'https://wikipedia.org/my_image,jpg'},  
];

const state = fromJS({
  skyscrapers: {
    list,
  },
});

test('selectList selects [`skyscrapers`, `list`]', () => {
  expect(selectList()(state).toJS()).toEqual(list);
});

test('selectItemsWithoutImages selects skyscrapers with falsy `image` field', () => {
  expect(selectItemsWithoutImages()(state).size).toBe(3);
  expect(selectItemsWithoutImages()(state).get(0).get('id')).toBe("1234");
});