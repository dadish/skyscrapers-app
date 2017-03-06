import { fromJS } from 'immutable';
import {
  selectCities,
} from '../selectors';

const loading = 'cities/Cities/loading';

const cities = {
  loading
};

const state = fromJS({
  cities,
})

test('selectCities() selects [`cities`]', () => {
  expect(selectCities()(state).toJS()).toEqual(cities);
});
