import { fromJS } from 'immutable';
import {
  selectSkyscrapers,
  selectLoading,
} from '../selectors';

const loading = 'skyscrapers/Skyscrapers/loading';
const keyword = 'skyscrapers/Skyscrapers/keyword';

const skyscrapers = {
  loading,
  keyword,
};

const state = fromJS({
  skyscrapers,
})

test('selectSkyscrapers() selects [`skyscrapers`]', () => {
  expect(selectSkyscrapers()(state).toJS()).toEqual(skyscrapers);
});

test('selectLoading() selects [`skyscrapers`, `loading`]', () => {
  expect(selectLoading()(state)).toBe(loading);
});
