import React from 'react';
import { shallow } from 'enzyme';
import Skyscrapers from '../';

test('renders without crashing', () => {
  shallow(<Skyscrapers />);
});