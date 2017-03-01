import { ActionsObservable } from 'redux-observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import xhrMock from 'utils/xhrMock';
import {
  changeSearchTxt,
} from '../../actions';
import {
  AJAX_SEARCH_START,
  AJAX_SEARCH_END,
  AJAX_SEARCH_FAIL,
} from '../../constants';
import CitiesListEpic from '../epic';

let action$;
let epic$;
let consumer;
let subscribtion;

jest.useFakeTimers();

beforeEach(() => {
  action$ = new ReplaySubject();
  epic$ = CitiesListEpic(new ActionsObservable(action$));
  consumer = jest.fn();
  subscribtion = epic$.subscribe(consumer);
});

afterEach(() => {
  subscribtion.unsubscribe();
});

test('CitiesListEpic debounces actions and emits only after 300ms passes', () => {
  jest.runTimersToTime(290);
  expect(consumer.mock.calls.length).toBe(0);
});

test('CitiesListEpic emits one AJAX_SEARCH_START action on start', () => {
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[0][0].type).toBe(AJAX_SEARCH_START);
});

test('CitiesListEpic emits AJAX_SEARCH_START when recieves CHANGE_SEARCH_TXT action with not empty payload', () => {
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[0][0].type).toBe(AJAX_SEARCH_START);
});

test('CitiesListEpic makes xhr request when recieves CHANGE_SEARCH_TXT action with not empty payload', () => {
  const fake = xhrMock();
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(fake.requests.length).toBe(1);
  fake.restore();
});

test('CitiesListEpic emits AJAX_SEARCH_END action after successful ajax request with payload set to response body', () => {
  const responseBody = { id: 13, message: 'hello world' };
  const fake = xhrMock(200, JSON.stringify(responseBody));
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_SEARCH_END);
  expect(consumer.mock.calls[1][0].payload).toEqual(responseBody);
  fake.restore();
});

test('CitiesListEpic emits AJAX_SEARCH_FAIL action on unsuccessful request with payload set to Error object', () => {
  const fake = xhrMock(401);
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_SEARCH_FAIL);
  expect(consumer.mock.calls[1][0].payload).toBeInstanceOf(Error);
  fake.restore();
});
