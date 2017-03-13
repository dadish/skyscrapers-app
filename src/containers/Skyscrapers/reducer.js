import { fromJS } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as c from './constants';

export const initialState = fromJS({
  list: initialListState,
  loading: false,
  listLimit: 30,
  listStart: 0,
  listTotal: 0,
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
    case c.AJAX_FETCH_START:
      return state.set('loading', true);

    case c.AJAX_FETCH_END:
      return state
        .set('loading', false)
        .set('listTotal', payload.data.skyscraper.listTotal)
        .set('listLimit', payload.data.skyscraper.listLimit)
        .set('listStart', payload.data.skyscraper.listStart)
        .set('list', listReducer(state.get('list'), action));

    case c.ACTIVATE_ITEM:
    case c.DEACTIVATE_ITEM:
    case c.RESET_LIST:
      return state.set('list', listReducer(state.get('list'), action));

    case c.AJAX_FETCH_FAIL:
      return state.set('loading', false);

    case LOCATION_CHANGE:
      if (payload.action !== 'POP') return state;
      const keyword = payload.query.keyword || "";
      return state.set('keyword', keyword);
    default:
      return state;
  }
};

export default reducer;