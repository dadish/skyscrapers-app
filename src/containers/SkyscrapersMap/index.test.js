import React from 'react';
import { shallow } from 'enzyme';
import SkyscrapersMap from './';

test('renders without crashing', () => {
  shallow(<SkyscrapersMap />);
});