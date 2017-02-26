import React from 'react';
import { shallow } from 'enzyme';
import { ListComponent } from '../';

test('renders without crashing', () => {
  shallow(<ListComponent />);
});