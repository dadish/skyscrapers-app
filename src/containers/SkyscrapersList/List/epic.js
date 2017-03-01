import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  ajaxSearchStart,
  ajaxSearchEnd,
  ajaxSearchFail,
} from '../actions';
import { getQuery } from '../schema';

const listEpic = ({ searchTxt, limit, start} = {}) => {
  let selector = "";
  if (searchTxt) selector += `, title|body*=${searchTxt}`;
  if (start) selector += `, start=${start}`;
  if (limit) selector += `, limit=${limit}`;
  selector = selector.substr(2);
  return concat$(

    // For each ajax request we fire AJAC_SEARCH_START action
    of$(ajaxSearchStart()),

    // make an ajax request
    ajax({
      url: process.env.REACT_APP_GRAPHQL_URL,
      body: {
        query: getQuery(),
        variables: JSON.stringify({ selector })
      },
      method: 'POST',
    })

      // fire AJAX_SEARCH_END action when successfully requested
      .map((xhr) => ajaxSearchEnd(xhr.response))

      // fire AJAC_SEARCH_FAIL action if request is note successful
      .catch(e => of$(ajaxSearchFail(e)))
  );
}
  
export default listEpic;