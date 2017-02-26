import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from '../';

test('renders without crashing', () => {
  shallow(<HeaderComponent />);
});