import React from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';
import { ListComponent } from '../';

const props = {
  list: new List([]),
};

test('renders without crashing', () => {
  shallow(<ListComponent {...props} />);
});