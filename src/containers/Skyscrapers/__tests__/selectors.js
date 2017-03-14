import { fromJS } from 'immutable';
import * as s from '../selectors';

const loading = 'skyscrapers/Skyscrapers/loading';
const listTotal = 'skyscrapers/Skyscrapers/listTotal';
const listLimit = 'skyscrapers/Skyscrapers/listLimit';
const listStart = 'skyscrapers/Skyscrapers/listStart';
const popups = ['1', '2', '3', '5'];

const skyscrapers = {
  loading,
  listTotal,
  listLimit,
  listStart,
  popups,
};

const state = fromJS({
  skyscrapers,
})

test('selectSkyscrapers() selects [`skyscrapers`]', () => {
  expect(s.selectSkyscrapers()(state).toJS()).toEqual(skyscrapers);
});

test('selectLoading() selects [`skyscrapers`, `loading`]', () => {
  expect(s.selectLoading()(state)).toBe(loading);
});

test('selectListTotal() selects [`skyscrapers`, `listTotal`]', () => {
  expect(s.selectListTotal()(state)).toBe(listTotal);
});

test('selectListLimit() selects [`skyscrapers`, `listLimit`]', () => {
  expect(s.selectListLimit()(state)).toBe(listLimit);
});

test('selectListStart() selects [`skyscrapers`, `listStart`]', () => {
  expect(s.selectListStart()(state)).toBe(listStart);
});

test('selectPopupOpen(id) returns boolean depending on if the id is in [`skyscrapers`, `popups`]', () => {
  expect(s.selectPopup('2')(state)).toBe(true);
  expect(s.selectPopup('4')(state)).toBe(false);
});