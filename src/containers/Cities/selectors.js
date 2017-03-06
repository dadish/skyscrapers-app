import { createSelector } from 'reselect';

export const selectCities = () => state => state.get('cities');
