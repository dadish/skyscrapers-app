import {
  PAGE_LOADED,
  WINDOW_RESIZE,
} from '../constants';
import {
  pageLoaded,
  windowResize,
} from '../actions'

const actionsMap = {
  pageLoaded: {
    method: pageLoaded,
    type: PAGE_LOADED,
  },
  windowResize: {
    method: windowResize,
    type: WINDOW_RESIZE,
  }
};

Object.keys(actionsMap).forEach((methodName) => {
  const { method, type } = actionsMap[methodName];
  test(`${methodName}() returns the right type`, () => {
    expect(method().type).toBe(type);
  });
});