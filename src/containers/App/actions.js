import createActionCreator from 'utils/createActionCreator';
import {
  PAGE_LOADED
} from './constants';

export const pageLoaded = createActionCreator(PAGE_LOADED);