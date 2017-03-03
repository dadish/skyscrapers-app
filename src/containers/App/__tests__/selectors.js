import { fromJS } from 'immutable';
import { selectPathname, selectParamKeyword } from '../selectors';

const pathname = 'skyscrapers/App/pathname';
const keyword = 'skyscrapers/App/keyword';

const state = fromJS({
  route: {
    locationBeforeTransitions: {
      pathname,
      query: {
        keyword,
      }
    }
  }
})

test('selectPathname() selects [`route`, `locationBeforeTransitions`, `pathname`]', () => {
  expect(selectPathname()(state)).toBe(pathname);
});

test('selectPathname() selects [`route`, `locationBeforeTransitions`, `query`, `keyword`]', () => {
  expect(selectParamKeyword()(state)).toBe(keyword);
});