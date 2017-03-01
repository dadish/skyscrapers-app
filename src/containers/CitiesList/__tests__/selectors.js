import { fromJS } from 'immutable';
import {
  selectCities,
  selectLoading,
} from '../selectors';

const loading = 'cities/CitiesList/loading';

const cities = {
  loading
};

const state = fromJS({
  cities,
})

test('selectCities() selects [`cities`]', () => {
  expect(selectCities()(state).toJS()).toEqual(cities);
});

test('selectLoading() selects [`cities`, `loading`]', () => {
  expect(selectLoading()(state)).toBe(loading);
});
