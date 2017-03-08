import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';
import { combineEpics } from 'redux-observable';
import * as c from './constants';
import * as a from './actions';
import { selectImagelessPageIds, selectImagelessPageTitles } from './selectors';

/**
 * Makes an AJAX request to en.wikipedia.org/w/api.php and returns an AJAX observable
 * @param {string} url The url of what you want to fetch
 */
export const fetchWikipediaApi = (search) =>
  ajax({
      url: `${c.WIKIPEDIA_API_URL}${search}`,
      withCredentials: false,
      crossDomain: true,
      method: 'GET',
      headers: {
        'Api-User-Agent': 'nurguly.ashyrov@gmail.com'
      },
      responseType: 'json',
    });
    
export const imageTitlesEpic = (action$, store) => {
  return action$
    .ofType(c.AJAX_GET_IMAGES)
    .switchMap((action) => {
      const ids = selectImagelessPageIds(action.payload)(store.getState());
      const search = `&pageids=${ids.join('|')}&prop=images&imlimit=500`;
      return concat$(
        of$(a.ajaxImageTitleFetchStart()),
        fetchWikipediaApi(search)
          .map((xhr) => a.ajaxImageTitleFetchEnd(xhr.response.query.pages, { name: action.payload}))
          .catch(err => of$(a.ajaxImageTitleFetchFail(err)))
      );
  });
};

export const imageUrlsEpic = (action$, store) => {
  return action$
    .ofType(c.AJAX_IMG_TTL_FETCH_END)
    .switchMap((action) => {
      const titles = selectImagelessPageTitles(action.meta.name)(store.getState());
      const search = `&titles=${titles.join('|')}&prop=imageinfo&iiprop=url&iilimit=30&iiurlwidth=300`;
      return concat$(
        of$(a.ajaxImageFetchStart()),
        fetchWikipediaApi(search)
          .map((xhr) => a.ajaxImageFetchEnd(xhr.response.query.pages))
          .catch(err => of$(a.ajaxImageFetchFail(err)))
      );
  });
};

export default combineEpics(imageTitlesEpic, imageUrlsEpic);