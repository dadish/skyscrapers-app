import { List } from 'immutable'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap'
import { from as from$ } from 'rxjs/observable/from'
import { LOCATION_CHANGE } from 'react-router-redux'
import { change } from 'redux-form';
import { selectPathname, selectQuery } from 'containers/App/selectors'


const updateFilter = (action$, store) =>
  action$
    .filter(({ type, payload}) => {
      const pathname = selectPathname()(store.getState());
      return (
        type === LOCATION_CHANGE &&
        payload.action === 'POP' &&
        pathname === '/'
      );
    })
    .switchMap(() => {
      const filterQuery = selectQuery()(store.getState());
      const actions = ['keyword', 'cities', 'height', 'floors', 'year'].map((key) => {
        let value = filterQuery.get(key) || "";
        if (key === 'cities') {
          if (value) value = new List(value.split('|'));
          else value = new List();
        }
        return change('filter', key, value)
      });
      return from$(actions);
    })
    

export default updateFilter