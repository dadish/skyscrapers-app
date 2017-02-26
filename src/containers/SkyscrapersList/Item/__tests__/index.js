import React from 'react';
import { shallow } from 'enzyme';
import ItemComponent from '../';

test('renders without crashing', () => {
  shallow(<ItemComponent />);
});