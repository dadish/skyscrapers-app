import { List } from 'immutable';
import * as c from './constants';

export const initialState = new List();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case c.AJAX_IMG_TTL_FETCH_END:
      return payload.reduce((state, wikipediaPage) => {
        const pageId = wikipediaPage.pageid;
        return wikipediaPage.images.reduce((state, { title }) => {
          return state.push({ pageId, title })
        }, state);
      }, state);

    default:
      return state;

  }
};

export default reducer;