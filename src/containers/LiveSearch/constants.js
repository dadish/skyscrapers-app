/**
 * User types into a search block
 */
export const CHANGE_SEARCH_TXT = "seed/LiveSearch/CHANGE_SEARCH_TXT";

/**
 * The app starts an AJAX request to github
 */
export const SUGGESTIONS_LOOKUP_START = "seed/LiveSearch/SUGGESTIONS_LOOKUP_START";

/**
 * The AJAX request to github successfully ends
 */
export const SUGGESTIONS_LOOKUP_END = "seed/LiveSearch/SUGGESTIONS_LOOKUP_END";

/**
 * The AJAX request is cancelled by the app.
 */
export const SUGGESTIONS_LOOKUP_CANCEL = "seed/LiveSearch/SUGGESTIONS_LOOKUP_CANCEL";

/**
 * The AJAX request to github fails
 */
export const SUGGESTIONS_LOOKUP_FAIL = "seed/LiveSearch/SUGGESTIONS_LOOKUP_FAIL";

/**
 * The app lists the results of the github request
 */
export const SHOW_SUGGESTIONS = "seed/LiveSearch/SHOW_SUGGESTIONS";

/**
 * The user selects one of the reqults that app suggests.
 */
export const SELECT_SUGGESTION = "seed/LiveSearch/SELECT_SUGGESTION";

/**
 * The suggestion is added to the LiveSearch list
 */
export const ADD_SUGGESTION = "seed/LiveSearch/ADD_SUGGESTION";

/**
 * The suggestion is removed from the LiveSearch list
 */
export const DELETE_SUGGESTION = "seed/LiveSearch/DELETE_SUGGESTION";

/**
 * The user marks the LiveSearch item as `Read`
 */
export const MARK_SUGGESTION_READ = "seed/LiveSearch/MARK_SUGGESTION_READ";

/**
 * The user marks the LiveSearch item as `Unread`
 */
export const MARK_SUGGESTION_UNREAD = "seed/LiveSearch/MARK_SUGGESTION_UNREAD";