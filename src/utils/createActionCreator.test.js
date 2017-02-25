import createActionCreator from './createActionCreator';

const CUSTOM_TYPE = 'seed/utils/createActionCreator/CUSTOM_TYPE';

test('it returns a function', () => {
  expect(typeof createActionCreator()).toBe('function');
});

test('the returned function always returns an object with property type that was given in the first call', () => {
  const actionCreator = createActionCreator(CUSTOM_TYPE);
  expect(actionCreator('foo', 'bar').type).toBe(CUSTOM_TYPE);
  expect(actionCreator().type).toBe(CUSTOM_TYPE);
  expect(actionCreator(() => 'method', { some: 'thing' }).type).toBe(CUSTOM_TYPE);
});

test('the returned function always returns an abject with property payload that is given as a first argument', () => {
  const actionCreator = createActionCreator(CUSTOM_TYPE);
  const objectPayload = {};
  expect(actionCreator('string').payload).toBe('string');
  expect(actionCreator(1234).payload).toBe(1234);
  expect(actionCreator().payload).toBe();
  expect(actionCreator(objectPayload).payload).toBe(objectPayload);
});

test('the returned function always returns an abject with property meta that is given as a second argument', () => {
  const actionCreator = createActionCreator(CUSTOM_TYPE);
  const objectPayload = {};
  expect(actionCreator(null, 'string').meta).toBe('string');
  expect(actionCreator(null, 1234).meta).toBe(1234);
  expect(actionCreator().mata).toBe();
  expect(actionCreator(null, objectPayload).meta).toBe(objectPayload);
});