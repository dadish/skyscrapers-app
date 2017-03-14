import React from 'react';
import { connect } from 'react-redux';
import { selectThumbnailForPage } from 'containers/Images/selectors';
import * as a from '../actions';
import { Header, Icon, Label } from 'semantic-ui-react';
import Segment, { Group } from 'components/Segment';
import CenteredImage from 'components/CenteredImage';
import CityTag from './Tags/City';
import YearTag from './Tags/Year';
import FloorsTag from './Tags/Floors';
import HeightTag from './Tags/Height';
import { push } from 'react-router-redux';

const { Group: TagGroup } = Label;

export const ItemComponent = (props) => {
  const {
    skyscraper,
    goToPage,
    thumb,
    handleMouseEnter,
    handleMouseLeave,
    popup,
  } = props;
  
  const id = skyscraper.get('id');
    
  const wiki_url = `https://en.wikipedia.org/wiki/index.html?curid=${skyscraper.get('wikipedia_id')}`;

  let elevation = skyscraper.get('active') ? 8 : 2
  if (popup) elevation = false;
  
  return (
    <Group
      raise={elevation}
      onMouseEnter={handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave(id)}
    >
      <Segment style={{ padding: 0}}>
        <CenteredImage src={thumb} alt={skyscraper.get('title')} />
      </Segment>
      <Segment>
        <Header as="h4">{skyscraper.get('title')}</Header>
      </Segment>
      <Segment>
        <TagGroup>
          <CityTag skyscraper={skyscraper} goToPage={goToPage} inPopup={popup} />
          <YearTag skyscraper={skyscraper} goToPage={goToPage} inPopup={popup} />
          <FloorsTag skyscraper={skyscraper} goToPage={goToPage} inPopup={popup} />
          <HeightTag skyscraper={skyscraper} goToPage={goToPage} inPopup={popup} />
        </TagGroup>
      </Segment>
      <Segment>
        <a href={wiki_url} target="_blank" ><Icon name="external"/>Wikipedia</a>
      </Segment>
    </Group>
  );
};

const mapStateToProps = () => (state, { skyscraper }) => ({
  thumb: selectThumbnailForPage(skyscraper.get('wikipedia_id'))(state),
});

const mapDispatchToProps = dispatch => ({
  goToPage: (url) => (ev) => {
    ev.preventDefault();
    dispatch(push(url));
  },
  handleMouseEnter: (id) => () => dispatch(a.activateItem(id)),
  handleMouseLeave: (id) => () => dispatch(a.deactivateItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);