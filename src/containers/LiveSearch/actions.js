import {
  CHANGE_SEARCH_TXT,
  SUGGESTIONS_LOOKUP_START,
  SUGGESTIONS_LOOKUP_END,
  SUGGESTIONS_LOOKUP_CANCEL,
  SUGGESTIONS_LOOKUP_FAIL,
  SHOW_SUGGESTIONS,
  SELECT_SUGGESTION,
  ADD_SUGGESTION,
  DELETE_SUGGESTION,
  MARK_SUGGESTION_READ,
  MARK_SUGGESTION_UNREAD,
} from './constants';
import createActionCreator  from 'utils/createActionCreator';

/**
 * Create action with type CHANGE_SEARCH_TXT
 */
export const changeSearchTxt = createActionCreator(CHANGE_SEARCH_TXT);

/**
 * Create action with type SUGGESTIONS_LOOKUP_START
 */
export const suggestionsLookupStart = createActionCreator(SUGGESTIONS_LOOKUP_START);

/**
 * Create action with type SUGGESTIONS_LOOKUP_END
 */
export const suggestionsLookupEnd = createActionCreator(SUGGESTIONS_LOOKUP_END);

/**
 * Create action with type SUGGESTIONS_LOOKUP_CANCEL
 */
export const suggestionsLookupCancel = createActionCreator(SUGGESTIONS_LOOKUP_CANCEL);

/**
 * Create action with type SUGGESTIONS_LOOKUP_FAIL
 */
export const suggestionsLookupFail = createActionCreator(SUGGESTIONS_LOOKUP_FAIL);

/**
 * Create action with type SHOW_SUGGESTIONS
 */
export const showSuggestions = createActionCreator(SHOW_SUGGESTIONS);

/**
 * Create action with type SELECT_SUGGESTION
 */
export const selectSuggestion = createActionCreator(SELECT_SUGGESTION);

/**
 * Create action with type ADD_SUGGESTION
 */
export const addSuggestion = createActionCreator(ADD_SUGGESTION);

/**
 * Create action with type DELETE_SUGGESTION
 */
export const deleteSuggestion = createActionCreator(DELETE_SUGGESTION);

/**
 * Create action with type MARK_SUGGESTION_READ
 */
export const markSuggestionRead = createActionCreator(MARK_SUGGESTION_READ);

/**
 * Create action with type MARK_SUGGESTION_UNREAD
 */
export const markSuggestionUnread = createActionCreator(MARK_SUGGESTION_UNREAD);