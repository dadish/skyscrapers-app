import { createSelector } from 'reselect';
import { selectList as selectSkyscrapers } from 'containers/Skyscrapers/List/selectors';
import { NAME as SKYSCRAPERS_NAME } from 'containers/Skyscrapers/constants';
import { selectList as selectCities } from 'containers/Cities/List/selectors';
import { NAME as CITIES_NAME } from 'containers/Cities/constants';

export const selectImages = () => state => state.get('images');

const selectListSelector = (name) => {
  if (name === SKYSCRAPERS_NAME) return selectSkyscrapers()
  else if (name === CITIES_NAME) return selectCities()
  throw new Error(`Only '${SKYSCRAPERS_NAME}' or '${CITIES_NAME}' is supported by selectListSelector.`);
};

export const selectImagelessPageIds = (name) => createSelector(
  selectListSelector(name),
  selectImages(),
  (list, images) => list.reduce((ids, item) => {
    const pageId = item.get('wikipedia_id');
    const image = images.find(image => image.get('pageId') === pageId);
    if (!image || !image.get('url')) ids.push(pageId);
    return ids;
  }, [])
);

const checkForJpg = new RegExp('jpe?g$', 'i');
export const selectImagelessPageTitles = (name) => createSelector(
  selectListSelector(name),
  selectImages(),
  (list, images) => list.reduce((titles, item) => {
    const pageId = item.get('wikipedia_id');
    const image = images.find((img) => {
      if (img.get('pageId') !== pageId) return false;
      if (img.get('url')) return false;
      if (!checkForJpg.test(img.get('title'))) return false;
      return true;
    });
    if (image) titles.push(image.get('title'));
    return titles;
  }, [])
);