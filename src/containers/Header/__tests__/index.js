import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from '../';

const props = {
  currentPathname : '/',
  goTo: () => {},
}

test('renders without crashing', () => {
  shallow(<HeaderComponent {...props} />);
});