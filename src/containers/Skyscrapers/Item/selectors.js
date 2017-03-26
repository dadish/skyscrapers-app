import { selectFloorsOptions, selectHeightOptions } from '../Filter/selectors'

export const getFloorsPopupStr = (floors) => {
  const prefix = 'See all skyscrapers';
  if (floors <= 20) return `${prefix} that has up to 20 floors.`;
  if (floors >= 80) return `${prefix} that has 80 or more floors.`;
  return `${prefix} with floors from ${floors - (floors % 20)} to ${floors + (20 - floors % 20)}`;
};

export const getFloorsFilterValue = (floors) => selectFloorsOptions()().reduce((value, opt) => {
  if (floors >= 80 && opt.min === 80) return opt.value;
  if (opt.min <= floors && floors < opt.max) return opt.value;
  return value;
}, "");

export const getHeightPopupStr = (height) => {
  const prefix = 'See all skyscrapers';
  if (height <= 250) return `${prefix} with height up to 250 ft.`;
  if (height >= 1000) return `${height} with height more than 1000 ft.`;
  return `${prefix} wwith height between ${height - (height % 250)} and ${height + (250 - height % 250)} ft.`;
};

export const getHeightFilterValue = (height) => selectHeightOptions()().reduce((value, opt) => {
  if (height >= 1000 && opt.min === 1000) return opt.value;
  if (opt.min <= height && height < opt.max) return opt.value;
  return value;
}, "")