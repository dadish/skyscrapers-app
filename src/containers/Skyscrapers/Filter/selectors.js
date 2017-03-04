import { createSelector } from 'reselect';
import { selectList } from 'containers/Cities/List/selectors';

export const selectHeightOptions = () => () => [
  { key: 'any', text: 'Any', value: false },
  { key: '0-250', text: '0-250 ft.', value: '0-250' },
  { key: '250-500', text: '250-500 ft.', value: '250-500' },
  { key: '500-750', text: '500-750 ft.', value: '500-750' },
  { key: '750-1000', text: '750-1000 ft.', value: '750-1000' },
  { key: '1000+', text: '1000+ ft.', value: '1000+' },
];

export const selectFloorsOptions = () => () => [
  { key: 'any', text: 'Any', value: false },
  { key: '0-20', text: '0-20 floors', value: '0-20' },
  { key: '20-40', text: '20-40 floors', value: '20-40' },
  { key: '40-60', text: '40-60 floors', value: '40-60' },
  { key: '60-80', text: '60-80 floors', value: '60-80' },
  { key: '80+', text: '80+ floors', value: '80+' },
];

export const selectYearOptions = () => () => {
  const options = [
    { key: 'any', text: 'Any', value: false },
  ]

  for (let i = 1850; i <= 2010; i += 10) {
    options.push({
      key: i,
      text: `${i}s`,
      value: `${i}-${i + 9}`,
    });
  }

  return options;
};

export const  selectCityOptions = () => createSelector(
  selectList(),
  cities => cities.map(item => ({
    key: item.get('id'),
    text: item.get('title'),
    value: item.get('id'),
  })).toJS()
);