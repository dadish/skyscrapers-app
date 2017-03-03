import { fromJS } from 'immutable';
import {
  selectSkyscrapers,
  selectLoading,
  selectSearchTxt,
} from '../selectors';

const loading = 'skyscrapers/SkyscrapersList/loading';
const searchTxt = 'skyscrapers/SkyscrapersList/searchTxt';

const skyscrapers = {
  loading,
  searchTxt,
};

const state = fromJS({
  skyscrapers,
})

test('selectSkyscrapers() selects [`skyscrapers`]', () => {
  expect(selectSkyscrapers()(state).toJS()).toEqual(skyscrapers);
});

test('selectLoading() selects [`skyscrapers`, `loading`]', () => {
  expect(selectLoading()(state)).toBe(loading);
});

test('selectSearchTxt() selects [`skyscrapers`, `searchTxt`]', () => {
  expect(selectSearchTxt()(state)).toBe(searchTxt);
});
