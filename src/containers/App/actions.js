import createActionCreator from 'utils/createActionCreator';
import {
  PAGE_LOADED
} from './constants';

/**
 * When page is first time loaded asynchronously
 */
export const pageLoaded = createActionCreator(PAGE_LOADED);