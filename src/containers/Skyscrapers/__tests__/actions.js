import {
  updateFilterKeyword,
  ajaxFetchStart,
  ajaxFetchEnd,
  ajaxFetchFail,
  initialLoad,
} from '../actions';
import {
  UPDATE_FILTER_KEYWORD,
  AJAX_FETCH_START,
  AJAX_FETCH_END,
  AJAX_FETCH_FAIL,
  INITIAL_LOAD,
} from '../constants';

const actionsMap = {
  updateFilterKeyword: {
    method: updateFilterKeyword,
    type: UPDATE_FILTER_KEYWORD
  },
  ajaxFetchStart: {
    method: ajaxFetchStart,
    type: AJAX_FETCH_START
  },
  ajaxFetchEnd: {
    method: ajaxFetchEnd,
    type: AJAX_FETCH_END
  },
  ajaxFetchFail: {
    method: ajaxFetchFail,
    type: AJAX_FETCH_FAIL
  },
  initialLoad: {
    method: initialLoad,
    type: INITIAL_LOAD
  },
};

Object.keys(actionsMap).forEach((methodName) => {
  const { method, type } = actionsMap[methodName];
  test(`${methodName}() returns the right type`, () => {
    expect(method().type).toBe(type);
  });
});