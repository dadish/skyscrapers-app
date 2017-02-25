import React from 'react';
import { shallow } from 'enzyme';
import About from './index';

test('renders without crashing', () => {
  shallow(<About />);
});