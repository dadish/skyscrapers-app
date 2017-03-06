import { createSelector } from 'reselect';
import { selectCities, selectFilterTxt } from '../selectors';

export const selectList = () => createSelector(
  selectCities(),
  cities => cities.get('list'),
);

export const selectFilteredList = () => createSelector(
  selectList(),
  selectFilterTxt(),
  (list, filterTxt) => {
    if (!filterTxt) return list;
    return list.filter(item => item.get('title').indexOf(filterTxt) !== -1);
  }
);