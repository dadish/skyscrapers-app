import { createSelector } from 'reselect';
import { selectLiveSearch } from '../selectors';

export const selectList = () => createSelector(
  selectLiveSearch(),
  liveSearch => liveSearch.get('list'),
);