import xhrMock from 'utils/xhrMock';
import {
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
} from '../../constants';
import ListEpic from '../epic';

let consumer;
let subscription;

jest.useFakeTimers();

beforeEach(() => {
  consumer = jest.fn();
});

afterEach(() => {
  subscription.unsubscribe();
  consumer.mockReset();
});

test('ListEpic() emits the AJAX_FETCH_START action first', () => {
  subscription = ListEpic().subscribe(consumer);
  expect(consumer.mock.calls.length).toBeGreaterThan(0)
  expect(consumer.mock.calls[0][0].type).toBe(AJAX_FETCH_START);
});

test('ListEpic() makes an ajax POST request', () => {
  const fake = xhrMock();
  expect(fake.requests.length).toBe(0);
  subscription = ListEpic().subscribe(consumer);
  expect(fake.requests.length).toBe(1);
  expect(fake.requests[0].method).toBe('POST');
  jest.runAllTimers();
  fake.restore();
});

test('ListEpic() emits AJAX_FETCH_END when ajax request is successful', () => {
  const fake = xhrMock();
  subscription = ListEpic().subscribe(consumer);
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_FETCH_END);
  fake.restore();
});

test('ListEpic() emits AJAX_FETCH_END action with payload set to ajax response', () => {
  const responseBody = { foo: 'bar', baz: 234, };
  const fake = xhrMock(200, responseBody);
  subscription = ListEpic().subscribe(consumer);
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].payload).toEqual(responseBody);
  fake.restore();
});

test('ListEpic() emits AJAX_FETCH_FAIL action when ajax request is unsuccessful', () => {
  const fake = xhrMock(401);
  subscription = ListEpic().subscribe(consumer);
  jest.runAllTimers();
  expect(consumer.mock.calls[1][0].type).toBe(AJAX_FETCH_FAIL);
  fake.restore();
});
