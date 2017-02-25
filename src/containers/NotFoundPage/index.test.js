import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './';

test('renders without crashing', () => {
  shallow(<NotFound />);
});