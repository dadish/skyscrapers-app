import { createSelector } from 'reselect';
import { selectCities } from '../selectors';

export const selectList = () => createSelector(
  selectCities(),
  cities => cities.get('list'),
);