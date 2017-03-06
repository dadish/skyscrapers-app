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
    const filterRegexp = new RegExp(filterTxt, 'i', 'g');
    return list.filter(item => filterRegexp.test(item.get('title')));
  }
);