import React from 'react';
import { shallow } from 'enzyme';
import CitiesList from '../';

test('renders without crashing', () => {
  shallow(<CitiesList />);
});