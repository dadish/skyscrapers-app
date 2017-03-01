import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import ItemComponent from '../';

const props = {
  city: fromJS({})
};

test('renders without crashing', () => {
  shallow(<ItemComponent {...props} />);
});