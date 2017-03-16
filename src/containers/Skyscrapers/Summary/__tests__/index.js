import React from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';
import { SummaryComponent } from '../';

const props = {
  total: 12,
  list: new List([1,2,3]),
};

test('renders alright!', () => {
  shallow(<SummaryComponent {...props} />)
});