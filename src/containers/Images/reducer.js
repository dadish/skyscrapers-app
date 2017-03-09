import { List, Map } from 'immutable';
import { isArray } from 'rxjs/util/isArray';
import * as c from './constants';

export const initialState = new List();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case c.AJAX_IMG_TTL_FETCH_END:
      return payload.reduce((state, wikipediaPage) => {
        const pageId = wikipediaPage.pageid;
        if (!wikipediaPage.images || !isArray(wikipediaPage.images)) return state;
        return wikipediaPage.images.reduce((state, { title }) => {
          return state.push(new Map({ pageId, title }));
        }, state);
      }, state);

    case c.AJAX_IMG_FETCH_END:
      return payload.reduce((state, imagePage) => {
        let i = state.findIndex((it) => it.get('title') === imagePage.title);
        if (i !== -1 && isArray(imagePage.imageinfo)) {
          return state.set(i, state.get(i).merge(imagePage.imageinfo[0]));
        }
        return state;
      }, state);
    default:
      return state;

  }
};

export default reducer;