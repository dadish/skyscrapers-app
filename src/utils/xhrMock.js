import sinon from 'sinon';

const defaultStatus = 200;
const defaultHeaders = { "Content-Type": "application/json" };
const defaultBody = [{ "id": 12, "comment": "Hey there" }];

/**
 * Mocks the XMLHttpRequest with sinon.useFakeXMLHttpRequest. The mock auto responds to all
 * AJAX requests in 10ms. With provided statusCode, headers and a body.
 * @param {integer} status The statusCode for the response
 * @param {string} body The body of the response
 * @param {object} headers The map of response headers
 * @return {object} The fake object, containing useful data in case needed.
 *  - {FakeXMLHttpRequest} xhr Sinon's fake xhr object.
 *  - {array[FakeXMLHttpRequest]}  requests An array of requests made to this mock
 *  - {function} restore The mock restore functoin. Short for fake.xhr.restorea()
 */
export default function xhrMock(status = defaultStatus, body = defaultBody, headers = defaultHeaders) {
  const fake = {};
  fake.xhr = sinon.useFakeXMLHttpRequest();
  fake.requests = [];
  fake.xhr.onCreate = (xhr) => {
    fake.requests.push(xhr);
    setTimeout(() => xhr.respond(status, headers, JSON.stringify(body)), 10);
  };
  fake.restore = () => fake.xhr.restore();
  return fake;
}