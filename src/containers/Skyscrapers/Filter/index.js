import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'semantic-ui-react';
import {
  changeKeyword,
} from '../actions';
import { selectLoading, selectKeyword } from '../selectors';

export const FilterComponent = ({ handleChange, loading, keyword }) => (
  <Input
    fluid
    icon="filter"
    placeholder="Filter skyscrapers..."
    onChange={handleChange}
    value={keyword}
    loading={loading}
  />
);

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  keyword: selectKeyword(),
});

const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => {
    dispatch(changeKeyword(ev.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);