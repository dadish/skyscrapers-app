import { createSelector } from 'reselect';
import { selectSkyscrapers } from '../selectors';

export const selectList = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('list'),
);