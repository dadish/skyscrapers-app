import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Segment from 'components/Segment';

export const ItemComponent = ({ city }) => (
  <Segment>
    <Image fluid src="https://placehold.it/200/" alt={city.get('title')} />
    <Header>{city.get('title')}</Header>
  </Segment>
);

export default ItemComponent;