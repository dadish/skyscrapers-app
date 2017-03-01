import { fromJS } from 'immutable';
import { selectList } from '../selectors';

const list = 'skyscrapers/CitiesList/List/list';

const state = fromJS({
  cities: {
    list,
  },
});

test('selectList selects [`cities`, `list`]', () => {
  expect(selectList()(state)).toBe(list);
});