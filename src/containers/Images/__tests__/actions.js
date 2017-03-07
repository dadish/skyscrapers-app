import * as c from '../constants';
import * as a from '../actions';

const actionsMap = {
  ajaxImageTitleFetchStart: {
    method: a.ajaxImageTitleFetchStart,
    type: c.AJAX_IMG_TTL_FETCH_START
  },
  ajaxImageTitleFetchEnd: {
    method: a.ajaxImageTitleFetchEnd,
    type: c.AJAX_IMG_TTL_FETCH_END
  },
  ajaxImageTitleFetchFail: {
    method: a.ajaxImageTitleFetchFail,
    type: c.AJAX_IMG_TTL_FETCH_FAIL
  },
  ajaxImageFetchStart: {
    method: a.ajaxImageFetchStart,
    type: c.AJAX_IMG_FETCH_START
  },
  ajaxImageFetchEnd: {
    method: a.ajaxImageFetchEnd,
    type: c.AJAX_IMG_FETCH_END
  },
  ajaxImageFetchFail: {
    method: a.ajaxImageFetchFail,
    type: c.AJAX_IMG_FETCH_FAIL
  },
};

Object.keys(actionsMap).forEach((methodName) => {
  const { method, type } = actionsMap[methodName];
  test(`${methodName}() returns the right type`, () => {
    expect(method().type).toBe(type);
  });
});