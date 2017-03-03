import createActionCreator from 'utils/createActionCreator';
import {
  CHANGE_FILTER_TXT,
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
  INITIAL_LOAD,
} from './constants';

/**
 * When the user updates the filter text
 */
export const changeKeyword = createActionCreator(CHANGE_FILTER_TXT);

/**
 * The AJAX filter request for matching skyscrapers starts
 */
export const ajaxFetchStart = createActionCreator(AJAX_FETCH_START);

/**
 * The AJAX filter request successfully ends
 */
export const ajaxFetchEnd = createActionCreator(AJAX_FETCH_END);

/**
 * The AJAX filter request fails
 */
export const ajaxFetchFail = createActionCreator(AJAX_FETCH_FAIL);

/**
 * The user visited the page the first time 
 */
export const initialLoad = createActionCreator(INITIAL_LOAD);