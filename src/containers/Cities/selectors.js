import { createSelector } from 'reselect';

export const selectCities = () => state => state.get('cities');

export const selectFilterTxt = () => createSelector(
  selectCities(),
  cities => cities.get('filterTxt'),
);