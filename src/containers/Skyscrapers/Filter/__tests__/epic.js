import { fromJS } from 'immutable';
import { ActionsObservable } from 'redux-observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { change } from 'redux-form';
import { push } from 'react-router-redux';
import { selectFilterSelector, selectFilterUrl } from '../selectors';
import SkyscrapersFilterEpic from '../epic';
import ListEpic from '../../List/epic'

let action$;
let epic$;
let consumer;
let subscribtion;
const store = {
  getState: () => fromJS({
    route: {
      locationBeforeTransitions: {
        pathname:"/cities",
        search:"",
        hash:"",
        action:"PUSH",
        key:"02ampl",
        query: {},
      }
    },
    form: {
      filter: {
        values: {
          keyword: "bank",
          height: "500-750",
          floors: "80+",
          year: "1950",
          cities: ["2345", "1321"],
        }
      },
    },
  }),
};

jest.useFakeTimers();

jest.mock('../../List/epic', () => jest.fn());

beforeEach(() => {
  action$ = new ReplaySubject();
  epic$ = SkyscrapersFilterEpic(new ActionsObservable(action$), store);
  consumer = jest.fn();
  subscribtion = epic$.subscribe(consumer);
  ListEpic.mockImplementation(() => {
    const concat$ = require('rxjs/observable/concat').concat;
    const of$ = require('rxjs/observable/of').of;
    return concat$(of$({ type: 'Epic Test' }));
  });
});

afterEach(() => {
  subscribtion.unsubscribe();
  ListEpic.mockReset();
});

test('SkyscrapersFilterEpic reacts only to redux-form CHANGE action', () => {
  action$.next({ type: 'some action'});
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(0);
  action$.next(change('foo', 'bar', 'baz'));
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBeGreaterThan(0);
});

test('SkyscrapersFilterEpic debounces the actions for 300ms', () => {
  action$.next(change('foo', 'bar', 'baz'));
  expect(consumer.mock.calls.length).toBe(0);
  jest.runTimersToTime(290);
  expect(consumer.mock.calls.length).toBe(0);
  jest.runTimersToTime(310);
  expect(consumer.mock.calls.length).toBeGreaterThan(0);
});

test('SkyscrapersFilterEpic switchMaps the stream to ListEpic', () => {
  action$.next(change('foo', 'bar', 'baz'));
  expect(ListEpic.mock.calls.length).toBe(0);
  jest.runAllTimers();
  expect(ListEpic.mock.calls.length).toBe(1);
});

test('SkyscrapersFilterEpic passes in a pw selector from selectFilterSelector selector', () => {
  action$.next(change('foo', 'bar', 'baz'));
  expect(ListEpic.mock.calls.length).toBe(0);
  jest.runAllTimers();
  expect(ListEpic.mock.calls[0][0]).toBe(selectFilterSelector()(store.getState()));
});

test('SkyscrapersFilterEpic emits the react-router-redux`s push() action to update the location', () => {
  action$.next(change('foo', 'bar', 'baz'));
  jest.runAllTimers();
  const mockCalls = consumer.mock.calls;
  expect(mockCalls[mockCalls.length - 1][0].type).toBe(push().type);
});

test('SkyscrapersFilterEpic emits the react-router-redux`s push() action with filterQueryString', () => {
  action$.next(change('foo', 'bar', 'baz'));
  jest.runAllTimers();
  const mockCalls = consumer.mock.calls;
  expect(mockCalls[mockCalls.length - 1][0].payload).toEqual(push(selectFilterUrl()(store.getState())).payload);
});