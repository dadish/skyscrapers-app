import { List } from 'immutable';
import { isNumeric } from 'rxjs/util/isNumeric';
import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { selectList as selectCitiesList } from 'containers/Cities/List/selectors';
import { selectLocation, selectLocationPathname } from 'containers/App/selectors';

export const selectHeightOptions = () => () => [
  { key: 'any', text: 'Any', value: "" },
  { key: '0-250', text: '0-250 ft.', value: '0-250', min: 0, max: 250 },
  { key: '250-500', text: '250-500 ft.', value: '250-500', min: 250, max: 500 },
  { key: '500-750', text: '500-750 ft.', value: '500-750', min: 500, max: 750 },
  { key: '750-1000', text: '750-1000 ft.', value: '750-1000', min: 750, max: 1000 },
  { key: '1000+', text: '1000+ ft.', value: '1000-', min: 1000 },
];

export const selectFloorsOptions = () => () => [
  { key: 'any', text: 'Any', value: "" },
  { key: '0-20', text: '0-20 floors', value: '0-20', min: 0, max: 20 },
  { key: '20-40', text: '20-40 floors', value: '20-40', min: 20, max: 40 },
  { key: '40-60', text: '40-60 floors', value: '40-60', min: 40, max: 60 },
  { key: '60-80', text: '60-80 floors', value: '60-80', min: 60, max: 80 },
  { key: '80+', text: '80+ floors', value: '80-', min: 80 },
];

export const selectYearOptions = () => () => {
  const options = [
    { key: 'any', text: 'Any', value: "" },
  ]

  for (let i = 1850; i <= 2010; i += 10) {
    options.push({
      key: i,
      text: `${i}s`,
      value: String(i),
    });
  }

  return options;
};

export const  selectCityOptions = () => createSelector(
  selectCitiesList(),
  cities => cities.map(item => ({
    key: item.get('id'),
    text: item.get('title'),
    value: item.get('id'),
  })).toJS()
);

export const selectFilterValues = () =>
  (state) => formValueSelector('filter')(state, 'keyword', 'cities', 'height', 'floors', 'year');

const buildFilterSelector =   ({ keyword, cities, height, floors, year }) => {
    
  let selector = "";

  // keyword {string} --> 'foo' || ''
  if (keyword) selector += `, title|body%=${keyword}`;

  // cities {List} --> List['1234', '1224', '1233'] || List['2135'] || List[]
  if (cities.size) selector += `, parent=${cities.join('|')}`;

  // height {string} --> min-max || min+ || ''
  if (height) {
    const [min, max] = height.split('-');
    if (min) selector += `, height>=${min}`;
    if (max) selector += `, height<=${max}`;
  }

  // floors {string} -->  min-max || min+ || ''
  if (floors) {
    const [min, max] = floors.split('-');
    if (min) selector += `, floors>=${min}`;
    if (max) selector += `, floors<=${max}`;
  }

  // year {string} --> '1960' || ''
  if (year) {
    selector += `, year>=${year}, year<=${Number(year) + 9}`;
  }

  return selector.substr(2); // remove leading comma and space
}

export const selectFilterSelector = () => createSelector(
  selectFilterValues(),
  buildFilterSelector,
);

export const selectFilterUrl = () => createSelector(
  selectLocationPathname(),
  selectFilterValues(),
  (pathname, filterValues) => {
    const filterValuesKeys = Object.keys(filterValues);

    let queryStr = filterValuesKeys.reduce((memo, key) => {
      const value = key === 'cities' ? filterValues[key].join('|') : filterValues[key];
      if (value) memo += `${key}=${value}&`;
      return memo;
    }, '');

    if (queryStr) queryStr = queryStr.substr(0, queryStr.length - 1); // remove the last `&`
    let url = pathname;
    if (queryStr) url += `?${queryStr}`;
    return url;
  }
);

export const selectSanitizedLocationQuery = () => createSelector(
  selectLocation(),
  selectHeightOptions(),
  selectFloorsOptions(),
  selectYearOptions(),
  (location, heightOptions, floorsOptions, yearOptions) =>
    ['keyword', 'cities', 'height', 'floors', 'year'].reduce((query, key) => {
      let value = query.get(key);
      if (value instanceof List) value = value.join('|');
      let target;
      if (!value) return query;
      switch (key) {
        case 'keyword':
          return query.set(key, String(value));
        case 'cities':
          const cityIds = value.split('|');
          const validCityIds = cityIds.filter(id => isNumeric(id));
          return query.set(key, validCityIds.join('|'));
        case 'height':
          target = heightOptions.find(item => item.value === value) || "";
          return query.set(key, target.value);
        case 'floors':
          target = floorsOptions.find(item => item.value === value) || "";
          return query.set(key, target.value);
        case 'year':
          target = yearOptions.find(item => item.value === value) || "";
          return query.set(key, target.value);
        default:
          return query;
      }
    }, location.get('query'))
)