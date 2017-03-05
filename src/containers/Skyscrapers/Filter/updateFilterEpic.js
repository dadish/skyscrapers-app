import { List } from 'immutable'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap'
import { from as from$ } from 'rxjs/observable/from'
import { LOCATION_CHANGE } from 'react-router-redux'
import { change, actionTypes } from 'redux-form';
import { selectLocationPathname, selectLocationQuery } from 'containers/App/selectors'

const { INITIALIZE } = actionTypes;

export const changeFilterForm = (_, store) => {
  const filterQuery = selectLocationQuery()(store.getState());
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
      const pathname = selectLocationPathname()(store.getState());
      return (
        type === LOCATION_CHANGE &&
        payload.action === 'POP' &&
        pathname === '/'
      );
    })
    .switchMap(() => changeFilterForm(action$, store))

export default updateFilterForm