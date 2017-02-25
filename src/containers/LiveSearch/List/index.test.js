import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ListComponent as List } from './';

const props = { list: fromJS([]), fetching: false };

test('renders without crashing', () => {
  shallow(<List {...props} />);
});

test('renders without crashing with `fetching` set to `true`', () => {
  props.fetching = true;
  shallow(<List {...props}/>)
});