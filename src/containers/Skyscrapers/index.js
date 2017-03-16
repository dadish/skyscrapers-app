import React from 'react';
import Filter from './Filter';
import Summary from './Summary';
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
    <Summary />
    <List />
    <Map />
  </div>
);

export default SkyscrapersComponent;