import { List, Map } from 'immutable';
import {
  AJAX_FETCH_END,
} from '../constants';

export const initialState = new List();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AJAX_FETCH_END:
      return new List(payload.data.skyscraper.list.map(item => new Map(item)));
    default:
      return state;
  }
};

export default reducer;