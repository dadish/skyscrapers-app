import { createSelector } from 'reselect';

export const selectCities = () => state => state.get('cities');

export const selectLoading = () => createSelector(
  selectCities(),
  cities => cities.get('loading'),
);