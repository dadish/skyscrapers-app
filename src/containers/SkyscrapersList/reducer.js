import { fromJS } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import {
  AJAX_SEARCH_START,
  AJAX_SEARCH_END,
  AJAX_SEARCH_FAIL,
} from './constants';

export const initialState = fromJS({
  list: initialListState,
  loading: false,
});

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case AJAX_SEARCH_START:
      return state.set('loading', true);
    case AJAX_SEARCH_END:
      state = state.set('loading', false);
      return state.set('list', listReducer(state.get('list'), action));
    case AJAX_SEARCH_FAIL:
      return state.set('loading', false);
    default:
      return state;
  }
};

export default reducer;