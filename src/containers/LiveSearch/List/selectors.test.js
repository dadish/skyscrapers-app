import { fromJS } from 'immutable';
import { selectList } from './selectors';

const list = 'target';

const state = fromJS({
  liveSearch: { list }
});

test("selectList() selects ['liveSearch', 'list'] from the state", () => {
  expect(selectList()(state)).toBe(list);
});