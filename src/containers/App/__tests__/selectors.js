import { fromJS } from 'immutable';
import { selectPathname, selectSearchTxtQuery } from '../selectors';

const pathname = 'skyscrapers/App/pathname';
const searchTxt = 'skyscrapers/App/searchTxt';

const state = fromJS({
  route: {
    locationBeforeTransitions: {
      pathname,
      query: {
        searchTxt,
      }
    }
  }
})

test('selectPathname() selects [`route`, `locationBeforeTransitions`, `pathname`]', () => {
  expect(selectPathname()(state)).toBe(pathname);
});

test('selectPathname() selects [`route`, `locationBeforeTransitions`, `query`, `searchTxt`]', () => {
  expect(selectSearchTxtQuery()(state)).toBe(searchTxt);
});