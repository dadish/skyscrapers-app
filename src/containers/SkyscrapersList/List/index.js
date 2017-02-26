import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import { Card } from 'semantic-ui-react';
import Item from '../Item';

export const ListComponent = ({ list }) => (
  <Card.Group itemsPerRow={2}>
    {list.map(item => <Item key={item.get('id')} skyscraper={item}/>)}
  </Card.Group>
);

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

export default connect(mapStateToProps)(ListComponent);