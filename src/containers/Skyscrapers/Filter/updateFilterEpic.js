import { List } from 'immutable'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap'
import { from as from$ } from 'rxjs/observable/from'
import { LOCATION_CHANGE } from 'react-router-redux'
import { change, actionTypes } from 'redux-form'
import {
  selectLocationSearch,
  selectLocationPathname,
} from 'containers/App/selectors'
import { selectFilterUrl, selectSanitizedLocationQuery } from './selectors'

const { INITIALIZE } = actionTypes;

export const changeFilterForm = (_, store) => {
  const filterQuery = selectSanitizedLocationQuery()(store.getState());
  const actions = ['keyword', 'cities', 'height', 'floors', 'year'].map((key) => {
    let value = filterQuery.get(key) || "";
    if (key === 'cities') {
      if (value) value = new List(value.split('|'));
      else value = new List();
    }
    return change('filter', key, value)
  });
  return from$(actions);
};

export const initFilterForm = (action$, store) =>
  action$
    .ofType(INITIALIZE)
    .switchMap(() => changeFilterForm(action$, store))

const updateFilterForm = (action$, store) =>
  action$
    .filter(({ type, payload}) => {
      const state = store.getState();
      const pathname = selectLocationPathname()(state);
      const searchStr = selectLocationSearch()(state);
      const filterStr = selectFilterUrl()(state);
      return (
        type === LOCATION_CHANGE && // ignore all actions except location change
        `${pathname}${searchStr}` !== filterStr && // ignore if filter form and url search is the same
        pathname === '/' // ignore all actions if we are not in root page
      );
    })
    .switchMap(() => changeFilterForm(action$, store))

export default updateFilterForm