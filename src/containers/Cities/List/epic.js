import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/catch';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
} from '../actions';
import { AJAX_FETCH_END } from '../constants';
import { getQuery } from '../schema';

const listCities = ({ limit, start } = {}) => {
  let selector = "";
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
        query: getQuery(),
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

export const listMoreCities = action$ => 
  action$
    .ofType(AJAX_FETCH_END)
    .takeWhile((action) => {
      const { getTotal, getLimit, getStart } = action.payload.data.city;
      return getTotal > getLimit + getStart;
    })
    .switchMap((action) => {
      const { getLimit, getStart } = action.payload.data.city;
      return listCities({ start: getStart + getLimit });
    });

  
export default listCities;