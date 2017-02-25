import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

test('renders without crashing', () => {
  shallow(<Home />);
});