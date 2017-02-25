import React from 'react';
import { shallow } from 'enzyme';
import LiveSearch from './index';

test('renders without crashing', () => {
  shallow(<LiveSearch />);
});

