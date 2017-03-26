import reducer, { initialState } from '../reducer'
import { windowResize } from '../actions'

test('returns the given state untouched on unknown actions', () => {
  expect(reducer(initialState, { type: 'unknowAction' })).toBe(initialState)
})

test('Updates the "windowWidth" property on   WINDOW_RESIZE acrion', () => {
  const width = 123456
  expect(initialState.get('windowWidth')).not.toBe(width)
  expect(reducer(initialState, windowResize(width)).get('windowWidth')).toBe(width)
})