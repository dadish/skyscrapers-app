import React from 'react';
import { shallow } from 'enzyme';
import { FilterComponent } from '../';

test('renders without crashing', () => {
  shallow(<FilterComponent />);
});