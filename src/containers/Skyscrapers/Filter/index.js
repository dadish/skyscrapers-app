import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'semantic-ui-react';
import {
  updateFilterKeyword,
} from '../actions';
import { selectLoading, selectFilterKeyword } from '../selectors';

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
  keyword: selectFilterKeyword(),
});

const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => {
    dispatch(updateFilterKeyword(ev.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);