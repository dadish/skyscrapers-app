import { fromJS } from 'immutable'
import { WINDOW_RESIZE } from './constants'

export const initialState = fromJS({
  windowWidth: window.innerWidth,
})

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case WINDOW_RESIZE:
      return state.set('windowWidth', payload)
    default:
      return state
  }
}

export default reducer