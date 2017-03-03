import React from 'react';
import { shallow } from 'enzyme';
import Cities from '../';

test('renders without crashing', () => {
  shallow(<Cities />);
});