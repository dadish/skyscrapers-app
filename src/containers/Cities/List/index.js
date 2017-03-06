import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card} from 'semantic-ui-react';
import { selectFilteredList } from './selectors';
import Item from '../Item';

export const ListComponent = ({ list, loading }) => {
  return (
    <Card.Group itemsPerRow={4} style={{ minHeight: '200px' }}>
      {list.map(item => <Item key={item.get('id')} city={item}/>)}
    </Card.Group>
  )
};

const mapStateToProps = createStructuredSelector({
  list: selectFilteredList(),
});

export default connect(mapStateToProps)(ListComponent);