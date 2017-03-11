import { fromJS } from 'immutable';
import * as c from '../constants';

const initialItemState = fromJS({
  id: '0',
  title: '',
  height: 0,
  floors: 0,
  year: 0,
  parentID: '0',
  wikipedia_id: 0,
  map: {
    lat: 0.0,
    lng: 0.0,
  },
  architects: {
    list: [],
  },
  active: false,
})

const itemReducer = (state = initialItemState, action) => {
  const { type, payload } = action;
  switch (type) {

    case c.AJAX_FETCH_END:
      return state.merge(payload);

    case c.ACTIVATE_ITEM:
      return state.set('active', true);

    case c.DEACTIVATE_ITEM:
      return state.set('active', false);

    default:
      return state;
  }
}

export default itemReducer;