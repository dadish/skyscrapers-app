import { List } from 'immutable';
import itemReducer from './itemReducer';
import * as c from '../constants';
import * as a from '../actions';

export const initialState = new List();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case c.AJAX_FETCH_END:
      return new List(payload.data.skyscraper.list.map(item => itemReducer(undefined, a.ajaxFetchEnd(item))));

    default:
      return state;
  }
};

export default reducer;