import createActionCreator from 'utils/createActionCreator';
import * as c from './constants';

/**
 * Auto image title resolver start
 */
export const ajaxImageTitleFetchStart = createActionCreator(c.AJAX_IMG_TTL_FETCH_START);

/**
 * Auto image title resolver stop
 */
export const ajaxImageTitleFetchEnd = createActionCreator(c.AJAX_IMG_TTL_FETCH_END);

/**
 * Auto image title resolver failed
 */
export const ajaxImageTitleFetchFail = createActionCreator(c.AJAX_IMG_TTL_FETCH_FAIL);

/**
 * Auto image resolver start
 */
export const ajaxImageFetchStart = createActionCreator(c.AJAX_IMG_FETCH_START);

/**
 * Auto image resolver stop
 */
export const ajaxImageFetchEnd = createActionCreator(c.AJAX_IMG_FETCH_END);

/**
 * Auto image resolver failed
 */
export const ajaxImageFetchFail = createActionCreator(c.AJAX_IMG_FETCH_FAIL);
