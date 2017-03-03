import { fromJS } from 'immutable';
import { selectList } from '../selectors';

const list = 'skyscrapers/Cities/List/list';

const state = fromJS({
  cities: {
    list,
  },
});

test('selectList selects [`cities`, `list`]', () => {
  expect(selectList()(state)).toBe(list);
});