import { createSelector } from 'reselect';

export const selectApp = () => state => state.get('app')

export const selectWindowWidth = () => createSelector(
  selectApp(),
  app => app.get('windowWidth')
)

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