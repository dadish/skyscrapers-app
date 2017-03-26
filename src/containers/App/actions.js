import createActionCreator from 'utils/createActionCreator'
import {
  PAGE_LOADED,
  WINDOW_RESIZE,
} from './constants'

/**
 * When page is first time loaded asynchronously
 */
export const pageLoaded = createActionCreator(PAGE_LOADED)

/**
 * When size of the screen changes
 */
export const windowResize = createActionCreator(WINDOW_RESIZE)