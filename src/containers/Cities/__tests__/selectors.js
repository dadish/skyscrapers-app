import { fromJS } from 'immutable';
import {
  selectCities,
  selectFilterTxt,
} from '../selectors';

const loading = 'cities/Cities/loading';
const filterTxt = 'cities/Cities/filterTxt';

const cities = {
  filterTxt,
};

const state = fromJS({
  cities,
});

test('selectCities() selects [`cities`]', () => {
  expect(selectCities()(state).toJS()).toEqual(cities);
});

test('selectFilterTxt() selects [`cities`, `filterTxt`]', () => {
  expect(selectFilterTxt()(state)).toEqual(filterTxt);
});
