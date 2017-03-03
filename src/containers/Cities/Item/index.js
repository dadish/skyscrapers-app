import React from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';

const {
  Header: CardHeader,
  Content: CardContent,
} = Card;

export const ItemComponent = ({ city }) => (
  <Card>
    <Image fluid src="https://placehold.it/200/" alt={city.get('title')} />
    <CardContent>
      <CardHeader>{city.get('title')}</CardHeader>
    </CardContent>
  </Card>
);

export default ItemComponent;