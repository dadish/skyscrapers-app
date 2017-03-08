import reducer, { initialState } from '../reducer'
import * as a from '../actions'

const firstPageId = 338534;
const secondPageId = 338535;
const firstTitle = 'File:Bank-of-America-Plaza-Atlanta-24802603.jpg';
const fourthTitle = 'File:191 Peachtree Street Building.JPG';

const payload = [
  {
    pageid: firstPageId,
    ns: 0,
    images: [
      { ns: 6, title: firstTitle },
      { ns: 6, title: "File:Bank of America Atlanta 2.jpg" },
      { ns: 6, title: "File:Bank of America Corporate Center.jpg" },
    ]
  },
  {
    pageid: secondPageId,
    ns: 0,
    images: [
      { ns: 6, title: fourthTitle },
      { ns: 6, title: "File:191 Peachtree Tower.jpg" },
      { ns: 6, title: "File:Commons-logo.svg" },
    ],
  },
];

test('reducer returns the same state for unknown actions', () => {
  expect(reducer(initialState, { type: 'uneskfxn e'})).toBe(initialState)
})

test('reducer appends the items in the payload to the state on AJAX_IMG_TTL_END action', () => {
  const newState = reducer(initialState, a.ajaxImageTitleFetchEnd(payload))
  expect(newState.get(0).toJS()).toEqual({ pageId: firstPageId, title: firstTitle })
  expect(newState.get(3).toJS()).toEqual({ pageId: secondPageId, title: fourthTitle })
})