import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import { Grid } from 'semantic-ui-react';
import Item from '../Item';

export const ListComponent = ({ list }) => (
  <Grid columns={2}>
    {list.map(item => <Item key={item.get('id')} skyscraper={item}/>)}
  </Grid>
);

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

export default connect(mapStateToProps)(ListComponent);