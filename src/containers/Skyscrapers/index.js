import React from 'react';
import Filter from './Filter';
import List from './List';
import Map from './Map';

const SkyscrapersComponent = () => (
  <div
    style={{
      padding: '1rem',
      paddingRight: '50%',
      paddingTop: '1rem',
    }}
  >
    <Filter />
    <List />
    <Map />
  </div>
);

export default SkyscrapersComponent;