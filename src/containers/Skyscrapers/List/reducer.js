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

    case c.ACTIVATE_ITEM:
    case c.DEACTIVATE_ITEM:
      const index = state.findIndex((item) => item.get('id') === payload);
      if (index === -1) return state;
      return state.set(index, itemReducer(state.get(index), action));

    default:
      return state;
  }
};

export default reducer;