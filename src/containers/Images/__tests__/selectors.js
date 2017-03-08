import { fromJS } from 'immutable';
import {
  selectImagelessPageIds,
  selectImagelessPageTitles,
  selectThumbnailForPage,
  thumbPlaceholder,
} from '../selectors';
import * as cSky from 'containers/Skyscrapers/constants';
import * as cCity from 'containers/Cities/constants';

const thumburl = 'skyscrapers/Images/thumburl';

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
    { pageId: 3, title: 'title - 3.jpg', url: 'adfjgmsa.jpg'},
    { pageId: 4, title: 'title - 4.jpg'}, // sky
    { pageId: 4, title: 'title - 4.jpg', url: 'adfjgmsa.jpg'},
    { pageId: 5, title: 'title - 5.jpg', url: 'adfjgmsa.jpg'},
    { pageId: 6, title: 'title - 6.jpg'}, // city
    { pageId: 7, title: 'title - 7.jpg', url: 'adfjgmsa.jpg'},
    { pageId: 8, title: 'title - 8.jpg'}, // city
    { pageId: 9, title: 'title - 9.jpg', url: 'adfjgmsa.jpg', thumburl},
    { pageId: 10, title: 'title - 10.jpg'}, // city
    { pageId: 11, title: 'title - 11.jpeg'},
    { pageId: 12, title: 'title - 12.svg'},
    { pageId: 13, title: 'title - 10.png'}, 
    { pageId: 14, title: 'title - 11.JPG'},
    { pageId: 15, title: 'title - 12.SVG'},
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

test('selectImagelessPageTitles() selects all _jpg_ titles from images whose url property is empty', () => {
  const titles = selectImagelessPageTitles(cSky.NAME)(state);
  expect(titles.length).toBe(1);
});

test('selectImagelessPageTitles() selects all _jpg_ titles from images whose url property is empty', () => {
  const titles = selectImagelessPageTitles(cCity.NAME)(state);
  expect(titles.length).toBe(3);
});

test('selectThumbnailForPage(id) returns the thumbnail url for the given wikipedia_id', () => {
  expect(selectThumbnailForPage(9)(state)).toBe(thumburl);
})

test('selectThumbnailForPage(id) returns placeholder url if there is not thumburl', () => {
  expect(selectThumbnailForPage(10)(state)).toBe(thumbPlaceholder);
});