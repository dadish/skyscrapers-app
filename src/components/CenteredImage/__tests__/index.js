import React from 'react';
import { shallow } from 'enzyme';
import CenteredImage from '../';

test('renders without crashing', () => {
  shallow(<CenteredImage />);
});