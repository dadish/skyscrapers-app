import React from 'react';
import {
  Grid,
  Segment,
  Image,
  Header,
  Divider,
  Statistic,
} from 'semantic-ui-react';

const { Column } = Grid;

export const ItemComponent = ({ skyscraper }) => (
  <Column>
    <Segment>
      <Image fluid src="http://placehold.it/200/" alt={skyscraper.get('title')} />
      <Header as="h4"><a href={skyscraper.get('url')}>{skyscraper.get('title')}</a></Header>
      <Divider />
      <Statistic value={skyscraper.get('floors')} label="floors" size="mini"/>
      <Statistic value={skyscraper.get('height')} label="height" size="mini"/>
    </Segment>
  </Column>
);

export default ItemComponent;