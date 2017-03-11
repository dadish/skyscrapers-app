import createActionCreator from 'utils/createActionCreator';
import * as c from './constants';

/**
 * The AJAX filter request for matching skyscrapers starts
 */
export const ajaxFetchStart = createActionCreator(c.AJAX_FETCH_START);

/**
 * The AJAX filter request successfully ends
 */
export const ajaxFetchEnd = createActionCreator(c.AJAX_FETCH_END);

/**
 * The AJAX filter request fails
 */
export const ajaxFetchFail = createActionCreator(c.AJAX_FETCH_FAIL);

/**
 * The user visited the page the first time 
 */
export const initialLoad = createActionCreator(c.INITIAL_LOAD);

/**
 * The user enters over skyscraper card or map-marker
 */
export const activateItem = createActionCreator(c.ACTIVATE_ITEM);

/**
 * The user leaves over skyscraper card or map-marker
 */
export const deactivateItem = createActionCreator(c.DEACTIVATE_ITEM);