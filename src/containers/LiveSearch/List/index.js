import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import { selectFetching } from '../selectors';
import Item from '../Item';
import './style.css';

export const ListComponent = ({ list, fetching }) => {
  let output;
  if (fetching) {
    output = <p>Fetching... 🌏 </p>;
  } else {
    output = (
      <ul className="trd-l">
        {list.map(item => <Item key={item.get('id')} item={item} />)}
      </ul>
    );
  }
  return output;
}

export const mapStateToProps = createStructuredSelector({
  list: selectList(),
  fetching: selectFetching(),
});

export default connect(mapStateToProps)(ListComponent);