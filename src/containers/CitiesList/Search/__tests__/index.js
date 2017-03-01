import React from 'react';
import { shallow } from 'enzyme';
import { SearchComponent } from '../';

test('renders without crashing', () => {
  shallow(<SearchComponent />);
});