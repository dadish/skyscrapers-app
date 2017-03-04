import React from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';
import InputDropdown from '../';

const props = {
  options: [
    { key: '0-250', text: '0-250 ft.', value: '0-250' },
    { key: '250-500', text: '250-500 ft.', value: '250-500' },
    { key: '500-750', text: '500-750 ft.', value: '500-750' },
    { key: '750-1000', text: '750-1000 ft.', value: '750-1000' },
    { key: '1000+', text: '1000+ ft.', value: '1000+' },
  ],
  placeholder: "place",
  input: {
    onChange: () => {},
    value: new List(),
  },
  meta: {},
};

test('renders alright!', () => {
  shallow(<InputDropdown {...props} />);
})