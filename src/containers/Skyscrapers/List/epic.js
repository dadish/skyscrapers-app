import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectSearchTxtQuery } from 'containers/App/selectors';
import {
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
} from '../actions';
import query from '../schema';

const listEpic = ({ searchTxt, limit, start} = {}) => {
  let selector = "";
  if (searchTxt) selector += `, title|body*=${searchTxt}`;
  if (start) selector += `, start=${start}`;
  if (limit) selector += `, limit=${limit}`;
  selector = selector.substr(2);
  return concat$(

    // For each ajax request we fire AJAC_SEARCH_START action
    of$(ajaxFetchStart()),

    // make an ajax request
    ajax({
      url: process.env.REACT_APP_GRAPHQL_URL,
      body: {
        query: query,
        variables: JSON.stringify({ selector })
      },
      method: 'POST',
    })

      // fire AJAX_FETCH_END action when successfully requested
      .map((xhr) => ajaxFetchEnd(xhr.response))

      // fire AJAC_SEARCH_FAIL action if request is note successful
      .catch(e => of$(ajaxFetchFail(e)))
  );
}

export const updateListEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(action => action.payload.action === 'POP' && action.payload.pathname === '/')
    .switchMap(action => {
      const searchTxt = selectSearchTxtQuery()(store.getState());
      return listEpic({ searchTxt });
    });

export const initListEpic = (action$, store) => {
  const searchTxt = selectSearchTxtQuery()(store.getState());
  return listEpic({ searchTxt });
}
  
export default listEpic;