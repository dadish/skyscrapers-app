import * as a from '../actions';
import * as c from '../constants';

const actionsMap = {
  ajaxFetchStart: {
    method: a.ajaxFetchStart,
    type: c.AJAX_FETCH_START
  },
  ajaxFetchEnd: {
    method: a.ajaxFetchEnd,
    type: c.AJAX_FETCH_END
  },
  ajaxFetchFail: {
    method: a.ajaxFetchFail,
    type: c.AJAX_FETCH_FAIL
  },
  initialLoad: {
    method: a.initialLoad,
    type: c.INITIAL_LOAD
  },
};

Object.keys(actionsMap).forEach((methodName) => {
  const { method, type } = actionsMap[methodName];
  test(`${methodName}() returns the right type`, () => {
    expect(method().type).toBe(type);
  });
});