import reducer from './reducer';
import { suggestionsLookupEnd } from '../actions';

const payload = {
  items: [
    { id: 0, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 1, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 2, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 3, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 4, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 5, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 6, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 7, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 8, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
    { id: 9, name: 'foo', owner: { login: 'some_people' }, description: 'my cool...', stargazers_count: 12, forks_count: 13, language: 'go' },
  ]
}

test('reducer() sets payload.items into state.list for ', () => {
  expect(reducer(undefined, suggestionsLookupEnd(payload)).size).toBe(payload.items.length);
});