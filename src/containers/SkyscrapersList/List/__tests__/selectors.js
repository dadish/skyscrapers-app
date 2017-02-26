import { fromJS } from 'immutable';
import { selectList } from '../selectors';

const list = 'skyscrapers/SkyscrapersList/List/list';

const state = fromJS({
  skyscrapers: {
    list,
  },
});

test('selectList selects [`skyscrapers`, `list`]', () => {
  expect(selectList()(state)).toBe(list);
});