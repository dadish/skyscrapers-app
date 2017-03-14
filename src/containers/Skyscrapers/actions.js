import createActionCreator from 'utils/createActionCreator';
import * as c from './constants';

/**
 * When the list need to be reset before appending new filtered list
 */
export const resetList  = createActionCreator(c.RESET_LIST);

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

/**
 * When the user scrolls down near to end
 */
export const hitBottom = createActionCreator(c.HIT_BOTTOM);

/**
 * When the popup shows up
 */
export const showPopup = createActionCreator(c.SHOW_POPUP);

/**
 * When the popup hides
 */
export const hidePopup = createActionCreator(c.HIDE_POPUP);

/**
 * When user scrolls we close all popups
 */
export const hideAllPopups = createActionCreator(c.HIDE_ALL_POPUPS);