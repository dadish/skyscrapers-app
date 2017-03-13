import { createSelector } from 'reselect';

export const selectSkyscrapers = () => state => state.get('skyscrapers');

export const selectLoading = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('loading'),
);

export const selectListTotal = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listTotal'),
);

export const selectListLimit = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listLimit'),
);

export const selectListStart = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listStart'),
);
