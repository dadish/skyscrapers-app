import createActionCreator from 'utils/createActionCreator';
import {
  CHANGE_SEARCH_TXT,
  AJAX_SEARCH_START,
  AJAX_SEARCH_END,
  AJAX_SEARCH_FAIL,
} from './constants';

/**
 * When the user updates the search text
 */
export const changeSearchTxt = createActionCreator(CHANGE_SEARCH_TXT);

/**
 * The AJAX search request for matching skyscrapers starts
 */
export const ajaxSearchStart = createActionCreator(AJAX_SEARCH_START);

/**
 * The AJAX search request successfully ends
 */
export const ajaxSearchEnd = createActionCreator(AJAX_SEARCH_END);

/**
 * The AJAX search request fails
 */
export const ajaxSearchFail = createActionCreator(AJAX_SEARCH_FAIL);