import { fromJS } from 'immutable';
import {
  CHANGE_SEARCH_TXT,
  SUGGESTIONS_LOOKUP_END,
  SUGGESTIONS_LOOKUP_START,
  SUGGESTIONS_LOOKUP_FAIL,
} from './constants';
import listReducer, { initialSate } from './List/reducer';

const initialState = fromJS({
  searchTxt: '',
  list: initialSate,
  fetching: false,
});

const reducer = (state = initialState, action) => {
  const { type, payload} = action;
  switch (type) {
    case CHANGE_SEARCH_TXT:
      return state.set('searchTxt', payload);
    case SUGGESTIONS_LOOKUP_END:
      return state.set('fetching', false).set('list', listReducer(state.get('list'), action));
    case SUGGESTIONS_LOOKUP_START:
      return state.set('fetching', true);
    case SUGGESTIONS_LOOKUP_FAIL:
      return state.set('fetching', false);
    default:
      return state;
  }
};

export default reducer;