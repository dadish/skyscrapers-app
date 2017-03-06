import React from 'react';
import List from './List';
import Filter from './Filter';
import { Divider } from 'semantic-ui-react';

const CitiesComponent = () => (
  <div>
    <Filter />
    <Divider hidden />
    <List />
  </div>
);

export default CitiesComponent;