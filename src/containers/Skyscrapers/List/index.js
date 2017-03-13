import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid } from 'semantic-ui-react';
import { selectList } from './selectors';
import { selectLoading } from '../selectors';
import Item from '../Item';

const { Column } = Grid;

export const ListComponent = ({ list, loading }) => {
  return (
    <Grid columns={3}>
      {list.size && list.map(item => (
        <Column key={item.get('id')}>
          <Item skyscraper={item}/>
        </Column>
      ))}
    </Grid>
  )
};

const mapStateToProps = createStructuredSelector({
  list: selectList(),
  loading: selectLoading(),
});

export default connect(mapStateToProps)(ListComponent);