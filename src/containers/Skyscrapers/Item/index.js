import React from 'react';
import { connect } from 'react-redux';
import { selectItem as selectCity } from 'containers/Cities/Item/selectors';
import {
  Card,
  Image,
  Statistic,
} from 'semantic-ui-react';
import { push } from 'react-router-redux';

const {
  Header: CardHeader,
  Content: CardContent,
} = Card;

export const ItemComponent = (props) => {
  const { skyscraper, city, goToCityPage } = props;
  const height = skyscraper.get('height') || null;
  const floors = skyscraper.get('floors') || null;
  return (
    <Card>
      <Image fluid src="https://placehold.it/200/" alt={skyscraper.get('title')} />
      <CardContent>
        <CardHeader>{skyscraper.get('title')}</CardHeader>
        {city && <a href={`/?cities=${city.get('id')}`} onClick={goToCityPage(city.get('id'))}>{city.get('title')}</a>}
      </CardContent>
      <CardContent extra>
        {floors && <Statistic value={floors} label="floors" size="mini"/>}
        {height && <Statistic value={height} label="height" size="mini"/>}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = () => (state, { skyscraper }) => ({
  city: selectCity(skyscraper.get('parentID'))(state)
});

const mapDispatchToProps = dispatch => ({
  goToCityPage: id => ev => {
    ev.preventDefault();
    dispatch(push(`?cities=${id}`))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);