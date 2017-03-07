import { fromJS } from 'immutable';
import reducer from '../reducer';

const state = fromJS({
  list: []
});

test('reducer returns the same state for unknown actions', () => {
  expect(reducer(state, { type: 'un;eskfxn ;e'})).toBe(state);
});