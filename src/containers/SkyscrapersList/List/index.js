import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';

export const ListComponent = ({ list }) => (
  <ul>
    {list.map(item => <li>{item.get('title')}</li>)}
  </ul>
);

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

export default connect(mapStateToProps)(ListComponent);