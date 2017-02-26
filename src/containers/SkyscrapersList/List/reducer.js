import { List } from 'immutable';
import {
  AJAX_SEARCH_END,
} from '../constants';

export const initialState = new List();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AJAX_SEARCH_END:
      return new List(payload);
    default:
      return state;
  }
};

export default reducer;