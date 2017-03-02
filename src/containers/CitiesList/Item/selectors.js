import { createSelector } from 'reselect';
import { selectList } from '../List/selectors';

export const selectItem = (id) => createSelector(
  selectList(),
  list => list.find(item => item.get('id') === id)
);
