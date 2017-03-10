import React from 'react';
import { connect } from 'react-redux';
import { selectItem as selectCity } from 'containers/Cities/Item/selectors';
import { selectThumbnailForPage } from 'containers/Images/selectors';
import { Header, Icon, Label } from 'semantic-ui-react';
import Segment, { Group } from 'components/Segment';
import CenteredImage from 'components/CenteredImage';
import { push } from 'react-router-redux';

const { Detail: LDetail, Group: LGroup } = Label;

export const ItemComponent = (props) => {
  const { skyscraper, city, goToPage, thumb } = props;
  const height = skyscraper.get('height', '');
  const floors = skyscraper.get('floors', '');
  const year = skyscraper.get('year', '');
  const yearUrl = `/?year=${Math.floor(year / 10) * 10}`;
  const wiki_url = `https://en.wikipedia.org/wiki/index.html?curid=${skyscraper.get('wikipedia_id')}`;
  const cityUrl = city ? `/?cities=${city.get('id')}` : null;
  const cityTitle = city ? city.get('title') : null;
  
  return (
    <Group raise="2">
      <Segment style={{ padding: 0}}>
        <CenteredImage src={thumb} alt={skyscraper.get('title')} />
      </Segment>
      <Segment>
        <Header as="h3">{skyscraper.get('title')}</Header>
      </Segment>
      <Segment>
        <LGroup>
          <Label>
          <Icon name="location arrow" /> {cityTitle}
          </Label>
          <Label>
            Year <LDetail>{year}</LDetail>
          </Label>
          <Label>
            Floors <LDetail>{floors}</LDetail>
          </Label>
          <Label>
            Height <LDetail>{height} ft.</LDetail>
          </Label>
        </LGroup>
      </Segment>
      <Segment>
        <a href={wiki_url} target="_blank" ><Icon name="external"/>Wikipedia</a>
      </Segment>
    </Group>
  );
};

const mapStateToProps = () => (state, { skyscraper }) => ({
  city: selectCity(skyscraper.get('parentID'))(state),
  thumb: selectThumbnailForPage(skyscraper.get('wikipedia_id'))(state),
});

const mapDispatchToProps = dispatch => ({
  goToPage: (url) => (ev) => {
    ev.preventDefault();
    dispatch(push(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);