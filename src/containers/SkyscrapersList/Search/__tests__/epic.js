import { ActionsObservable } from 'redux-observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import xhrMock from 'utils/xhrMock';
import {
  changeSearchTxt,
} from '../../actions';
import { push } from 'react-router-redux';
import {
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
} from '../../constants';
import SkyscrapersSearchEpic from '../epic';

let action$;
let epic$;
let consumer;
let subscribtion;

jest.useFakeTimers();

beforeEach(() => {
  action$ = new ReplaySubject();
  epic$ = SkyscrapersSearchEpic(new ActionsObservable(action$));
  consumer = jest.fn();
  subscribtion = epic$.subscribe(consumer);
});

afterEach(() => {
  subscribtion.unsubscribe();
});

test('SkyscrapersSearchEpic debounces actions and emits only after 300ms passes', () => {
  action$.next(changeSearchTxt('foo'));
  jest.runTimersToTime(290);
  expect(consumer.mock.calls.length).toBe(0);
});

test('SkyscrapersSearchEpic does not react on randomActions', () => {
  action$.next({ type: 'RandomAction', payload: 'foo' });
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(0);
});

test('SkyscrapersSearchEpic emits one AJAX_FETCH_START action on start', () => {
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[0][0].type).toBe(AJAX_FETCH_START);
});

test('SkyscrapersSearchEpic emits AJAX_FETCH_START when recieves CHANGE_SEARCH_TXT action with not empty payload', () => {
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[0][0].type).toBe(AJAX_FETCH_START);
});

test('SkyscrapersSearchEpic makes xhr request when recieves CHANGE_SEARCH_TXT action with not empty payload', () => {
  const fake = xhrMock();
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(fake.requests.length).toBe(1);
  fake.restore();
});

test('SkyscrapersSearchEpic emits AJAX_FETCH_END action after successful ajax request with payload set to response body', () => {
  const responseBody = { id: 13, message: 'hello world' };
  const fake = xhrMock(200, JSON.stringify(responseBody));
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_FETCH_END);
  expect(consumer.mock.calls[1][0].payload).toEqual(responseBody);
  fake.restore();
});

test('SkyscrapersSearchEpic always emits LOCATION_CHANGE action after AJAX_FETCH_END', () => {
  const responseBody = { id: 13, message: 'hello world' };
  const fake = xhrMock(200, JSON.stringify(responseBody));
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[2][0].type).toBe(push().type);
  fake.restore();
});

test('SkyscrapersSearchEpic emits AJAX_FETCH_FAIL action on unsuccessful request with payload set to Error object', () => {
  const fake = xhrMock(401);
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_FETCH_FAIL);
  expect(consumer.mock.calls[1][0].payload).toBeInstanceOf(Error);
  fake.restore();
});
