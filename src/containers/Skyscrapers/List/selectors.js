import { createSelector } from 'reselect';
import { selectSkyscrapers } from '../selectors';

export const selectList = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('list'),
);

export const selectImagelessWikipediaIds = () => createSelector(
  selectList(),
  list => list
    .filter(item => !item.get('images'))
    .map(item => item.get('wikipedia_id'))
)