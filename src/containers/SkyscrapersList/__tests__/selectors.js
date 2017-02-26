import { fromJS } from 'immutable';
import { selectSkyscrapers } from '../selectors';

const skyscrapers = 'skyscrapers/SkyscrapersList/skyscrapers';

const state = fromJS({
  skyscrapers,
})

test('selectSkyscrapers() selects [`skyscrapers`]', () => {
  expect(selectSkyscrapers()(state)).toBe(skyscrapers);
});