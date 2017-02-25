import React from 'react';
import { shallow } from 'enzyme';
import SkyscrapersList from './';

test('renders without crashing', () => {
  shallow(<SkyscrapersList />);
});