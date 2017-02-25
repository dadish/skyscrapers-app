import { createSelector } from 'reselect';

export const selectLiveSearch = () => (state) => state.get('liveSearch');

export const selectSearchTxt = () => createSelector(
  selectLiveSearch(),
  liveSearch => liveSearch.get('searchTxt'),
);

export const selectFetching = () => createSelector(
  selectLiveSearch(),
  liveSearch => liveSearch.get('fetching'),
);