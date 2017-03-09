import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid } from 'semantic-ui-react';
import { selectFilteredList } from './selectors';
import Item from '../Item';

const { Column } = Grid;

export const ListComponent = ({ list, loading }) => {
  return (
    <Grid columns={4}>
      {list.map(item => (
        <Column key={item.get('id')}>
          <Item city={item}/>
        </Column>
      ))}
    </Grid>
  )
};

const mapStateToProps = createStructuredSelector({
  list: selectFilteredList(),
});

export default connect(mapStateToProps)(ListComponent);