import { fromJS, List } from 'immutable';
import listReducer, { initialState as initialListState } from './List/reducer';
import * as c from './constants';

export const initialState = fromJS({
  list: initialListState,
  loading: false,
  listLimit: 30,
  listStart: 0,
  listTotal: 0,
  popups: [],
});

const popupsReducer = (state = new List(), action) => {
  const { type, payload } = action;
  switch (type) {

    case c.SHOW_POPUP:
      return state.push(payload);

    case c.HIDE_POPUP:
      return state.reduce((popups, popupId) => {
        if (popupId === payload) return popups;
        return popups.push(popupId);
      }, new List());

    case c.HIDE_ALL_POPUPS:
      return new List();

    default:
      return state;
  }
};

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

    case c.AJAX_FETCH_FAIL:
      return state.set('loading', false);

    case c.ACTIVATE_ITEM:
    case c.DEACTIVATE_ITEM:
    case c.RESET_LIST:
      return state.set('list', listReducer(state.get('list'), action));

    case c.SHOW_POPUP:
    case c.HIDE_POPUP:
    case c.HIDE_ALL_POPUPS:
      return state.set('popups', popupsReducer(state.get('popups'), action));

    default:
      return state;
  }
};

export default reducer;