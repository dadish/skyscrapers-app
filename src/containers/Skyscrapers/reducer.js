import { fromJS } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
  UPDATE_FILTER_KEYWORD,
} from './constants';

export const initialState = fromJS({
  list: initialListState,
  loading: false,
  filterOn: false,
  filter: {
    keyword: '',
    city: [],
    heightMin: false,
    heigthMax: false,
    floorsMin: false,
    floorsMax: false,
    yearMin: false,
    yearMax: false,
  },
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
    case UPDATE_FILTER_KEYWORD:
      return state.set('keyword', payload);
    case LOCATION_CHANGE:
      if (payload.action !== 'POP') return state;
      const keyword = payload.query.keyword || "";
      return state.set('keyword', keyword);
    default:
      return state;
  }
};

export default reducer;