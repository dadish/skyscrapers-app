import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card, Loader} from 'semantic-ui-react';
import { selectList } from './selectors';
import { selectLoading } from '../selectors';
import Item from '../Item';

export const ListComponent = ({ list, loading }) => {
  return (
    <Card.Group itemsPerRow={2} style={{ minHeight: '200px' }}>
      <Loader active={loading}>Loading...</Loader>
      {list.map(item => <Item key={item.get('id')} skyscraper={item}/>)}
    </Card.Group>
  )
};

const mapStateToProps = createStructuredSelector({
  list: selectList(),
  loading: selectLoading(),
});

export default connect(mapStateToProps)(ListComponent);