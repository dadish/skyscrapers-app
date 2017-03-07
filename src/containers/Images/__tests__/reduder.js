import { fromJS } from 'immutable';
import reducer from '../reducer';
import * as a from '../actions';

const state = fromJS({
  list: [
    {
      pageid: 3302,
      ns: 0,
      images: [
        { ns: 6, title: 'File:Bank-of-America-Plaza-Atlanta-24802603.jpg' },
        { ns: 6, title: "File:Bank of America Atlanta 2.jpg" },
        { ns: 6, title: "File:Bank of America Corporate Center.jpg" },
      ]
    }
  ]
});

test('reducer returns the same state for unknown actions', () => {
  expect(reducer(state, { type: 'un;eskfxn ;e'})).toBe(state);
});

test.skip('reducer appends the items in the payload to the state.images.list on AJAX_IMG_TTL_END action', () => {
  
});