import React from 'react';
import {
  Grid,
  Card,
  Image,
  Statistic,
} from 'semantic-ui-react';

const { Column } = Grid;
const {
  Header: CardHeader,
  Content: CardContent,
} = Card;

export const ItemComponent = ({ skyscraper }) => (
  <Column>
    <Card>
      <Image fluid src="http://placehold.it/200/" alt={skyscraper.get('title')} />
      <CardContent>
        <CardHeader>
          <a href={skyscraper.get('url')}>{skyscraper.get('title')}</a>
        </CardHeader>
      </CardContent>
      <CardContent extra>
        <Statistic value={skyscraper.get('floors')} label="floors" size="mini"/>
        <Statistic value={skyscraper.get('height')} label="height" size="mini"/>
      </CardContent>
    </Card>
  </Column>
);

export default ItemComponent;