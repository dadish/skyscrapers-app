import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ItemComponent as Item } from './';

const item = fromJS({
  id: 1234,
  name: 'seed',
  owner: 'dadish',
  description: 'My personal react kickstarter',
  stargazers_count: 0,
  forks_count: 1,
  language: 'JavaScript',
});

test('renders without crashing', () => {
  shallow(<Item item={item} />);
});