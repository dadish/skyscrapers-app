import React from 'react';
import { connect } from 'react-redux';
import Segment from 'components/Segment';
import { createStructuredSelector } from 'reselect';
import { selectList } from '../List/selectors';
import { selectListTotal } from '../selectors';

export const SummaryComponent = ({ total, list }) => (
  <Segment>Total: {total}, showing: {list.size}</Segment>
);

const mapStateToProps = createStructuredSelector({
  total: selectListTotal(),
  list: selectList(),
});

export default connect(mapStateToProps)(SummaryComponent);