import {
  PAGE_LOADED
} from '../constants';
import {
  pageLoaded,
} from '../actions'

const actionsMap = {
  pageLoaded: {
    method: pageLoaded,
    type: PAGE_LOADED,
  }
};

Object.keys(actionsMap).forEach((methodName) => {
  const { method, type } = actionsMap[methodName];
  test(`${methodName}() returns the right type`, () => {
    expect(method().type).toBe(type);
  });
});