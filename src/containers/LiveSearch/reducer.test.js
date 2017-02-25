import reducer from './reducer';
import { fromJS } from 'immutable';
import {
  changeSearchTxt,
  suggestionsLookupStart,
  suggestionsLookupEnd,
  suggestionsLookupFail,
} from './actions';

let state = null;

beforeAll(() => {
  state = fromJS({
    searchTxt: 'some text',
    fetching: false,
  });
});

test('reducer() updates `searchTxt` property with the action.payload', () => {
  const newSearchTxt = 'asldnfqA.ESF';
  const newState = reducer(state, changeSearchTxt(newSearchTxt));
  expect(newState.get('searchTxt')).toBe(newSearchTxt);
});

test('reducer() sets `fetchting` property to `true` for SUGGESTIONS_LOOKUP_START action', () => {
  const newState = reducer(state, suggestionsLookupStart());
  expect(newState.get('fetching')).toBe(true);
});

test('reducer() sets the `fetching` property to `false` for SUGGESTIONS_LOOKUP_END action', () => {
  state = state.set('fetching', true);
  const newState = reducer(state, suggestionsLookupEnd({ items: []}));
  expect(newState.get('fetching')).toBe(false);
});

test('reducer() sets the `fetching` property to `false` for SUGGESTIONS_LOOKUP_FAIL action', () => {
  state = state.set('fetching', true);
  const newState = reducer(state, suggestionsLookupFail());
  expect(newState.get('fetching')).toBe(false);
});
