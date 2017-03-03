import { createSelector } from 'reselect';

export const selectRoute = () => state => state.get('route');

export const selectLocation = () => createSelector(
  selectRoute(),
  route => route.get('locationBeforeTransitions'),
);

export const selectPathname = () => createSelector(
  selectLocation(),
  location => location.get('pathname'),
);

export const selectQuery = () => createSelector(
  selectLocation(),
  location => location.get('query'),
)

export const selectParamKeyword = () => createSelector(
  selectQuery(),
  query => query.get('keyword'),
);