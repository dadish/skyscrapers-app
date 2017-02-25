import React from 'react';
import { shallow } from 'enzyme';
import Menu from './index';

test('renders without crashing', () => {
  shallow(<Menu />);
});