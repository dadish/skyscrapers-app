import reducer, { initialState } from '../reducer';
import { List } from 'immutable';
import listReducer from '../List/reducer';
import * as a from '../actions';

jest.mock('../List/reducer', () => jest.fn());

const payload = {
  data: {
    skyscraper: {
      listTotal: 1030,
      listLimit: 40,
      listStart: 160,
      list: []
    }
  }
};

test('returns the given state untouched if action type is unknown', () => {
  expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
});

test('sets the `loading` property to `true` on AJAX_FETCH_START action', () => {
  expect(initialState.get('loading')).toBe(false);
  expect(reducer(initialState, a.ajaxFetchStart()).get('loading')).toBe(true);
});

test('sets the `loading` property to `false` on AJAX_FETCH_END action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, a.ajaxFetchEnd(payload)).get('loading')).toBe(false);
});

test('updates the `listTotal` property on AJAX_FETCH_END action', () => {
  expect(initialState.get('listTotal')).toBe(0);
  const newState = reducer(initialState, a.ajaxFetchEnd(payload));
  expect(newState.get('listTotal')).toBe(1030);
});

test('updates the `listLimit` property on AJAX_FETCH_END action', () => {
  expect(initialState.get('listLimit')).toBe(30);
  const newState = reducer(initialState, a.ajaxFetchEnd(payload));
  expect(newState.get('listLimit')).toBe(40);
});

test('updates the `listStart` property on AJAX_FETCH_END action', () => {
  expect(initialState.get('listStart')).toBe(0);
  const newState = reducer(initialState, a.ajaxFetchEnd(payload));
  expect(newState.get('listStart')).toBe(160);
});

test('delegates the AJAX_FETCH_END action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  reducer(initialState, a.ajaxFetchEnd(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});

test('sets the `loading` property to `false` on AJAX_FETCH_FAIL action', () => {
  const state = initialState.set('loading', true);
  expect(state.get('loading')).toBe(true);
  expect(reducer(state, a.ajaxFetchFail()).get('loading')).toBe(false);
});

test('delegates the ACTIVATE_ITEM action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = 1234;
  reducer(initialState, a.activateItem(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});

test('delegates the DEACTIVATE_ITEM action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = 1234;
  reducer(initialState, a.deactivateItem(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});

test('delegates the RESET_LIST action to ./List/reducer', () => {
  const lastCallIndex = listReducer.mock.calls.length;
  const payload = [];
  reducer(initialState, a.resetList(payload));
  expect(listReducer.mock.calls.length).toBe(lastCallIndex + 1);
  expect(listReducer.mock.calls[lastCallIndex][1].payload).toBe(payload);
});

test('appends a popupId into popups on SHOW_POPUP action', () => {
  expect(initialState.get('popups').size).toBe(0);
  const popupId = '123ewrdf';
  const newState = reducer(initialState, a.showPopup(popupId));
  expect(newState.get('popups').size).toBe(1);
  expect(newState.get('popups').get(0)).toBe(popupId);
});

test('removes a popupId from popups on HIDE_POPUP action', () => {
  const state = initialState.set('popups', new List(['1', '2', '3', '4', '5']));
  expect(state.get('popups').size).toBe(5);
  const newState = reducer(state, a.hidePopup('2'));
  expect(newState.get('popups').size).toBe(4);
  expect(newState.get('popups').findIndex(it => it === '2')).toBe(-1);
});
