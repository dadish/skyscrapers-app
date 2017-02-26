import { fromJS } from 'immutable';
import {
  selectSkyscrapers,
  selectLoading,
} from '../selectors';

const loading = 'skyscrapers/SkyscrapersList/loading';

const skyscrapers = {
  loading
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
