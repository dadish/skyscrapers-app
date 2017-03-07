import { fromJS } from 'immutable';
import { selectImagelessPageIds } from '../selectors';
import * as cSky from 'containers/skyscrapers/constants';
import * as cCity from 'containers/skyscrapers/constants';

const state = fromJS({
  skyscrapers: {
    list: [
      { wikipedia_id: 1 }, //
      { wikipedia_id: 2 }, //
      { wikipedia_id: 3 },
      { wikipedia_id: 4 }, //
      { wikipedia_id: 5 },
    ],
  },
  cities: {
    list: [
      { wikipedia_id: 6 }, //
      { wikipedia_id: 7 },
      { wikipedia_id: 8 }, //
      { wikipedia_id: 9 },
      { wikipedia_id: 10 }, //
    ],
  },
  images: [
    { pageId: 3, title: '___', url: 'adfjgmsa.jpg'},
    { pageId: 4, title: '___' },
    { pageId: 5, title: '___', url: 'adfjgmsa.jpg'},
    { pageId: 6, title: '___' },
    { pageId: 7, title: '___', url: 'adfjgmsa.jpg'},
    { pageId: 8, title: '___'},
    { pageId: 9, title: '___', url: 'adfjgmsa.jpg'},
    { pageId: 10, title: '___'},
    { pageId: 11, title: '___'},
    { pageId: 12, title: '___'},
  ]
});

test("selectImagelessPageIds('skyscrapers') selects all wikipedia_id in skyscrapers that has no image in images", () => {
  const ids = selectImagelessPageIds(cSky.NAME)(state)
  expect(ids.length).toBe(3)
})

test("selectImagelessPageIds('cities') selects all wikipedia_id in cities that has no image in images", () => {
  const ids = selectImagelessPageIds(cCity.NAME)(state)
  expect(ids.length).toBe(3)
})