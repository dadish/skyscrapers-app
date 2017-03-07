import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ajaxGetImages } from 'containers/Images/actions';
import { NAME } from '../constants';
import {
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
} from '../actions';
import query from '../schema';

const listEpic = (selector = "") =>
  concat$(

    // For each ajax request we fire AJAC_FILTER_START action
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
      .mergeMap((xhr) => concat$(
        of$(ajaxFetchEnd(xhr.response)),
        of$(ajaxGetImages(NAME)),
        ))

      // fire AJAC_FILTER_FAIL action if request is note successful
      .catch(e => of$(ajaxFetchFail(e)))
  );
  
export default listEpic;