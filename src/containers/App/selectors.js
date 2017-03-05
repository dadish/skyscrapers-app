import { createSelector } from 'reselect';

export const selectRoute = () => state => state.get('route');

export const selectLocation = () => createSelector(
  selectRoute(),
  route => route.get('locationBeforeTransitions'),
);

export const selectLocationPathname = () => createSelector(
  selectLocation(),
  location => location.get('pathname'),
);

export const selectLocationSearch = () => createSelector(
  selectLocation(),
  location => location.get('search'),
);

export const selectLocationQuery = () => createSelector(
  selectLocation(),
  location => location.get('query'),
)