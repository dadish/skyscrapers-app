import React from 'react';
import { connect } from 'react-redux';
import { selectItem as selectCity } from 'containers/Cities/Item/selectors';
import { selectThumbnailForPage } from 'containers/Images/selectors';
import {
  getFloorsFilterValue,
  getFloorsPopupStr,
  getHeightFilterValue,
  getHeightPopupStr,
} from './selectors';
import { Header, Icon, Label, Popup } from 'semantic-ui-react';
import Segment, { Group } from 'components/Segment';
import CenteredImage from 'components/CenteredImage';
import { push } from 'react-router-redux';

const { Detail: LDetail, Group: LGroup } = Label;

export const ItemComponent = (props) => {
  const { skyscraper, city, goToPage, thumb } = props;
  
  const height = skyscraper.get('height', '');
  const heightUrl = `/?height=${getHeightFilterValue(height)}`;
  const heightPopup = getHeightPopupStr(height);
  
  const floors = skyscraper.get('floors', '');
  const floorsUrl = `/?floors=${getFloorsFilterValue(floors)}`;
  const floorsPopup = getFloorsPopupStr(floors);
  
  const year = skyscraper.get('year', '');
  const years = Math.floor(year / 10) * 10;
  const yearUrl = `/?year=${years}`;
  
  const cityUrl = city ? `/?cities=${city.get('id')}` : null;
  const cityTitle = city ? city.get('title') : null;
  
  const wiki_url = `https://en.wikipedia.org/wiki/index.html?curid=${skyscraper.get('wikipedia_id')}`;

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
          
          <Popup
            trigger={<Label as="a" href={cityUrl} onClick={goToPage(cityUrl)}><Icon name="location arrow" /> {cityTitle}</Label>}
            content={<span>See all skyscrapers in <strong>{cityTitle}</strong></span>}
            hideOnScroll
          />

          <Popup
            trigger={<Label as="a" href={yearUrl} onClick={goToPage(yearUrl)}>Year <LDetail>{year}</LDetail></Label>}
            content={<span>See all skyscrapers built in <strong>{years}</strong>s</span>}
            hideOnScroll
          />

          <Popup
            trigger={<Label as="a" href={floorsUrl} onClick={goToPage(floorsUrl)}> Floors <LDetail>{floors}</LDetail> </Label>}
            content={floorsPopup}
            hideOnScroll
          />

          <Popup
            trigger={<Label as="a" href={heightUrl} onClick={goToPage(heightUrl)}>Height <LDetail>{height} ft.</LDetail></Label>}
            content={heightPopup}
            hideOnScroll
          />

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