import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { ActionsObservable } from 'redux-observable'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { selectLocationQuery } from 'containers/App/selectors'
import updateFilterFormEpic from '../updateFilterEpic'

let action$;
let epic$;
let consumer;
let subscription;
let state = fromJS({
  route: {
    locationBeforeTransitions: {
      pathname:"/",
      search:"",
      hash:"",
      action:"PUSH",
      key:"02ampl",
      query: {
        cities:"4150|4125|4147|4131|4146",
        floors:"60-80",
        height:"750-1000",
        keyword:"bank",
        year:"2010",
      },
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
});
const store = {
  getState: () => state,
};

jest.useFakeTimers();

beforeEach(() => {
  action$ = new ReplaySubject();
  epic$ = updateFilterFormEpic(new ActionsObservable(action$), store);
  consumer = jest.fn();
  subscription = epic$.subscribe(consumer);
});

afterEach(() => {
  subscription.unsubscribe();
});


test('updateFilterFormEpic reacts only to LOCATION_CHANGE action type', () => {
  action$.next({ type: 'RandomAction' });
  expect(consumer).not.toHaveBeenCalled();
});

test('updateFilterFormEpic reacts only to location with pathname `/`', () => {
  state = state.setIn(['route', 'locationBeforeTransitions', 'pathname'], '/cities');
  action$.next({ type: LOCATION_CHANGE });
  expect(consumer).not.toHaveBeenCalled();
});

test('updateFilterFormEpic reacts only to location with pathname `/`', () => {
  state = state.setIn(['route', 'locationBeforeTransitions', 'pathname'], '/');
  action$.next({ type: LOCATION_CHANGE });
  expect(consumer).toHaveBeenCalled();
});

test('updateFilterFormEpic emits redux-form change() action for each key/value pairs in location query', () => {
  const filterQuery = selectLocationQuery()(store.getState());
  action$.next({ type: LOCATION_CHANGE });
  expect(consumer.mock.calls.length).toBe(filterQuery.size);
});