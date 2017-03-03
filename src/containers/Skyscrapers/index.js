import React from 'react';
import List from './List';
import Search from './Search';
import { Divider } from 'semantic-ui-react';

const SkyscrapersComponent = () => (
  <div>
    <Search />
    <Divider hidden />
    <List />
  </div>
);

export default SkyscrapersComponent;