import React from 'react';
import {
  Card,
  Image,
  Statistic,
} from 'semantic-ui-react';

const {
  Header: CardHeader,
  Content: CardContent,
} = Card;

export const ItemComponent = ({ skyscraper }) => (
  <Card>
    <Image fluid src="http://placehold.it/200/" alt={skyscraper.get('title')} />
    <CardContent>
      <CardHeader>{skyscraper.get('title')}</CardHeader>
    </CardContent>
    <CardContent extra>
      <Statistic value={skyscraper.get('floors')} label="floors" size="mini"/>
      <Statistic value={skyscraper.get('height')} label="height" size="mini"/>
    </CardContent>
  </Card>
);

export default ItemComponent;