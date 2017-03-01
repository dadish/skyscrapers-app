import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  ajaxSearchStart,
  ajaxSearchEnd,
  ajaxSearchFail,
} from '../actions';
import { getQuery } from '../schema';

const listEpic = ({ searchTxt, limit, start}) =>
  concat$(

    // For each ajax request we fire AJAC_SEARCH_START action
    of$(ajaxSearchStart()),

    // make an ajax request
    ajax({
      url: process.env.REACT_APP_GRAPHQL_URL,
      body: {
        query: getQuery(),
        variables: JSON.stringify({ selector: searchTxt ? `title|body*=${searchTxt}` : "" })
      },
      method: 'POST',
    })

      // fire AJAX_SEARCH_END action when successfully requested
      .map((xhr) => ajaxSearchEnd(xhr.response))

      // fire AJAC_SEARCH_FAIL action if request is note successful
      .catch(e => of$(ajaxSearchFail(e)))
  )

  export default listEpic;