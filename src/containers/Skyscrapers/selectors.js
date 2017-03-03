import { createSelector } from 'reselect';

export const selectSkyscrapers = () => state => state.get('skyscrapers');

export const selectLoading = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('loading'),
);

export const selectFilterKeyword = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('keyword'),
);