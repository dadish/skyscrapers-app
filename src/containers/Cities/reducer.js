import { fromJS } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import {
  AJAX_FETCH_END,
  CHANGE_FILTER_TXT,
} from './constants';

export const initialState = fromJS({
  list: initialListState,
  filterTxt: "",
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AJAX_FETCH_END:
      return state.set('list', listReducer(state.get('list'), action));
    case CHANGE_FILTER_TXT:
      return state.set('filterTxt', payload);
    default:
      return state;
  }
};

export default reducer;