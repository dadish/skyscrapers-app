import React  from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';
import { SkyMap as SkyscrapersMap} from '../';

const props = {
  list: new List(),
}

test('renders without errors!', () => {
  shallow(<SkyscrapersMap {...props} />);
});