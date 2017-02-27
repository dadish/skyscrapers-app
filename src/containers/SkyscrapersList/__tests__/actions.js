import {
  changeSearchTxt,
  ajaxSearchStart,
  ajaxSearchEnd,
  ajaxSearchFail,
  initialLoad,
} from '../actions';
import {
  CHANGE_SEARCH_TXT,
  AJAX_SEARCH_START,
  AJAX_SEARCH_END,
  AJAX_SEARCH_FAIL,
  INITIAL_LOAD,
} from '../constants';

const actionsMap = {
  changeSearchTxt: {
    method: changeSearchTxt,
    type: CHANGE_SEARCH_TXT
  },
  ajaxSearchStart: {
    method: ajaxSearchStart,
    type: AJAX_SEARCH_START
  },
  ajaxSearchEnd: {
    method: ajaxSearchEnd,
    type: AJAX_SEARCH_END
  },
  ajaxSearchFail: {
    method: ajaxSearchFail,
    type: AJAX_SEARCH_FAIL
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