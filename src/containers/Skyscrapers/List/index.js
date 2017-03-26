import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Loader, Segment } from 'semantic-ui-react';
import { selectList, selectGridColumns } from './selectors';
import { selectLoading } from '../selectors';
import Item from '../Item';

const { Column } = Grid;

export const ListComponent = ({ list, loading, columns }) => {
  const loadingStr = list.size ? 'Fetching more...' : 'Fetching...';
  return (
    <Grid columns={columns}>
      {list.size ? list.map(item => (
        <Column key={item.get('id')}>
          <Item skyscraper={item}/>
        </Column>
      )) : null}
      {loading && <Column width={16}>
        <Segment
          style={{
            backgroundColor: '#000',
            opacity: '0.6',
            width: '100%',
            padding: '2rem',
          }}
        >
          <Loader active inline="centered" inverted>{loadingStr}</Loader>
        </Segment>
      </Column>}
    </Grid>
  )
};

const mapStateToProps = createStructuredSelector({
  list: selectList(),
  columns: selectGridColumns(),
  loading: selectLoading(),
});

export default connect(mapStateToProps)(ListComponent);