import createActionCreator from 'utils/createActionCreator';
import {
  CHANGE_FILTER_TXT,
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
  INITIAL_LOAD,
} from './constants';

/**
 * When the user updates the search text
 */
export const changeFilterTxt = createActionCreator(CHANGE_FILTER_TXT);

/**
 * The AJAX search request for matching cities starts
 */
export const ajaxFetchStart = createActionCreator(AJAX_FETCH_START);

/**
 * The AJAX search request successfully ends
 */
export const ajaxFetchEnd = createActionCreator(AJAX_FETCH_END);

/**
 * The AJAX search request fails
 */
export const ajaxFetchFail = createActionCreator(AJAX_FETCH_FAIL);

/**
 * The user visited the page the first time 
 */
export const initialLoad = createActionCreator(INITIAL_LOAD);