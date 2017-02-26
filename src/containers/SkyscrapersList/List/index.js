import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import { Grid } from 'semantic-ui-react';

export const ListComponent = ({ list }) => (
  <Grid>
    {list.map(item => <Grid.Row key={item.get('id')}>{item.get('title')}</Grid.Row>)}
  </Grid>
);

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

export default connect(mapStateToProps)(ListComponent);