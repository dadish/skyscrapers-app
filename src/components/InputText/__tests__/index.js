import React from 'react';
import { shallow } from 'enzyme';
import Input from '../';

const props = {
  input: {
    name: 'foo',
  },
  meta: {
    bar: 'baz',
    blob: 'fish',
  }
};

test('renders without crashing', () => {
  shallow(<Input {...props} />);
});