
/**
 * Method that creates flux action creators
 * Fist call with the type arguments returns the action creator with defined type.
 * Second call accepts payload & meta
 * @argument {string} type       Flux action type constant.
 * @argument {mixed}  payload    The flux action payload.
 * @argument {object} meta       Flux action meta property.
 * @return   {function}          First call returns the actionCreator function
 * @return   {function}          Second call returns Flux action object with payload & meta properties
 */
const createActionCreator = (type) => (payload, meta) => ({
  type,
  payload,
  meta,
});

export default createActionCreator;