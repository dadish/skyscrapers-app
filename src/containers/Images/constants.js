/**
 * The name of the module
 */
export const NAME = 'images';

/**
 * Initiate the image discovery from wikipedia
 */
export const AJAX_GET_IMAGES = 'skyscrapers/Images/AJAX_GET_IMAGES';

/**
 * Auto image title resolver start
 */
export const AJAX_IMG_TTL_FETCH_START = 'skyscrapers/Images/AJAX_IMG_TTL_FETCH_START';

/**
 * Auto image title resolver stop
 */
export const AJAX_IMG_TTL_FETCH_END = 'skyscrapers/Images/AJAX_IMG_TTL_FETCH_END';

/**
 * Auto image title resolver failed
 */
export const AJAX_IMG_TTL_FETCH_FAIL = 'skyscrapers/Images/AJAX_IMG_TTL_FETCH_FAIL';

/**
 * Auto image resolver start
 */
export const AJAX_IMG_FETCH_START = 'skyscrapers/Images/AJAX_IMG_FETCH_START';

/**
 * Auto image resolver stop
 */
export const AJAX_IMG_FETCH_END = 'skyscrapers/Images/AJAX_IMG_FETCH_END';

/**
 * Auto image resolver failed
 */
export const AJAX_IMG_FETCH_FAIL = 'skyscrapers/Images/AJAX_IMG_FETCH_FAIL';

/**
 * The Wikipedia API url suffixed with default params like format, formatversion, origin...
 */
export const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php?origin=*&formatversion=2&format=json&action=query';