import {
  changeSearchTxt,
  suggestionsLookupStart,
  suggestionsLookupEnd,
  suggestionsLookupCancel,
  suggestionsLookupFail,
  showSuggestions,
  selectSuggestion,
  addSuggestion,
  deleteSuggestion,
  markSuggestionRead,
  markSuggestionUnread,
} from './actions';

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

const actionTypesMap = [
  {
    method: changeSearchTxt,
    type: CHANGE_SEARCH_TXT,
  },
  {
    method: suggestionsLookupStart,
    type: SUGGESTIONS_LOOKUP_START,
  },
  {
    method: suggestionsLookupEnd,
    type: SUGGESTIONS_LOOKUP_END,
  },
  {
    method: suggestionsLookupCancel,
    type: SUGGESTIONS_LOOKUP_CANCEL,
  },
  {
    method: suggestionsLookupFail,
    type: SUGGESTIONS_LOOKUP_FAIL,
  },
  {
    method: showSuggestions,
    type: SHOW_SUGGESTIONS,
  },
  {
    method: selectSuggestion,
    type: SELECT_SUGGESTION,
  },
  {
    method: addSuggestion,
    type: ADD_SUGGESTION,
  },
  {
    method: deleteSuggestion,
    type: DELETE_SUGGESTION,
  },
  {
    method: markSuggestionRead,
    type: MARK_SUGGESTION_READ,
  },
  {
    method: markSuggestionUnread,
    type: MARK_SUGGESTION_UNREAD,
  },
];

actionTypesMap.forEach((action, index) => {
  test(`action creator ${action.method}() returns the right type`, (done) => {
    expect(action.method().type).toBe(action.type);
    done();
  });
});