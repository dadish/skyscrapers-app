import { fromJS } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import {
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
  CHANGE_SEARCH_TXT,
} from './constants';

export const initialState = fromJS({
  list: initialListState,
  loading: false,
  searchTxt: '',
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AJAX_FETCH_START:
      return state.set('loading', true);
    case AJAX_FETCH_END:
      state = state.set('loading', false);
      return state.set('list', listReducer(state.get('list'), action));
    case AJAX_FETCH_FAIL:
      return state.set('loading', false);
    case CHANGE_SEARCH_TXT:
      return state.set('searchTxt', payload);
    default:
      return state;
  }
};

export default reducer;