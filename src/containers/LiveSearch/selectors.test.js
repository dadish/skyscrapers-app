import { fromJS } from 'immutable';
import {
  selectLiveSearch,
  selectSearchTxt,
  selectFetching,
} from './selectors';


const searchTxt = 'adskfhgnmm';

const fetching = 'waesrdtft';

const liveSearch = {
  searchTxt,
  fetching,
};

const state = fromJS({
  liveSearch,
})

test("selectRoot() selects ['liveSearch'']", () => {
  expect(selectLiveSearch()(state).toJS()).toEqual(liveSearch);
});

test("selectSearchTxt selects ['liveSearch', 'searchTxt']", () => {
  expect(selectSearchTxt()(state)).toBe(searchTxt);
});

test("selectSearchTxt selects ['liveSearch', 'fetching']", () => {
  expect(selectFetching()(state)).toBe(fetching);
});