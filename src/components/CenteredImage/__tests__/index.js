import React from 'react';
import { shallow } from 'enzyme';
import CenteredImage from '../';

const props = {
  src: 'string',
};

test('renders without crashing', () => {
  shallow(<CenteredImage {...props} />);
});