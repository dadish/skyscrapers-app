import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import {
  WIKIPEDIA_API_URL,
  AJAX_FETCH_END,
} from '../constants';
import {
  ajaxImageTitleFetchStart,
  ajaxImageTitleFetchEnd,
  ajaxImageTitleFetchFail,
} from '../actions';
import { selectImagelessWikipediaIds } from './selectors';

/**
 * Makes an AJAX request to en.wikipedia.org/w/api.php and returns an AJAX observable
 * @param {string} url The url of what you want to fetch
 */
export const fetchWikipediaApi = (url) =>
  ajax({
      url,
      withCredentials: false,
      crossDomain: true,
      method: 'GET',
      headers: {
        'Api-User-Agent': 'nurguly.ashyrov@gmail.com'
      },
      responseType: 'json',
    });

/**
 * Fetches image titles for each wikipedia page identified by id.
 * @param {string} pageIds The list of wikipedia page ids for which
 * you want the images for
 */
export const getImagePageTitlesEpic = (pageIds) => {
  const url = `${WIKIPEDIA_API_URL}&action=query&pageids=${pageIds.join('|')}&prop=images&imlimit=500`;
  return concat$(
    of$(ajaxImageTitleFetchStart()),
    fetchWikipediaApi(url)
      .map((xhr) => ajaxImageTitleFetchEnd(xhr.response.query.pages))
      .catch(err => of$(ajaxImageTitleFetchFail(err)))
  );
}
    
export const imagesEpic = (action$, store) => {
  return action$
    .ofType(AJAX_FETCH_END)
    .switchMap((action) => {
      const ids = selectImagelessWikipediaIds()(store.getState());
      return getImagePageTitlesEpic(ids)
  });
};

export default imagesEpic;