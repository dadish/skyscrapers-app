import { fromJS } from 'immutable';
import { selectPathname } from '../selectors';

const pathname = 'skyscrapers/App/pathname';

const state = fromJS({
  route: {
    locationBeforeTransitions: {
      pathname,
    }
  }
})

test('selectPathname() selects [`route`, `locationBeforeTransitions`, `pathname`]', () => {
  expect(selectPathname()(state)).toBe(pathname);
});