import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { ItemComponent } from '../';

const props = {
  skyscraper: fromJS({}),
  thumb: 'string',
  goToPage: () => {},
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
};

test('renders without crashing', () => {
  shallow(<ItemComponent {...props} />);
});