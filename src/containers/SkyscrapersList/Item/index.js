import React from 'react';
import { connect } from 'react-redux';
import { selectItem as selectCity } from 'containers/CitiesList/Item/selectors';
import {
  Card,
  Image,
  Statistic,
} from 'semantic-ui-react';

const {
  Header: CardHeader,
  Content: CardContent,
  Meta: CardMeta,
} = Card;

export const ItemComponent = (props) => {
  const { skyscraper, city } = props;
  return (
    <Card>
      <Image fluid src="https://placehold.it/200/" alt={skyscraper.get('title')} />
      <CardContent>
        <CardHeader>{skyscraper.get('title')}</CardHeader>
        {city && <CardMeta>{city.get('title')}</CardMeta>}
      </CardContent>
      <CardContent extra>
        <Statistic value={skyscraper.get('floors')} label="floors" size="mini"/>
        <Statistic value={skyscraper.get('height')} label="height" size="mini"/>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = () => (state, { skyscraper }) => ({
  city: selectCity(skyscraper.get('parentID'))(state)
});

export default connect(mapStateToProps)(ItemComponent);