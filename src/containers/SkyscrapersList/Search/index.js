import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'semantic-ui-react';
import {
  changeSearchTxt,
} from '../actions';
import { selectLoading, selectSearchTxt } from '../selectors';

export const SearchComponent = ({ handleChange, loading, searchTxt }) => (
  <Input
    fluid
    icon="search"
    placeholder="Search skyscrapers..."
    onChange={handleChange}
    value={searchTxt}
    loading={loading}
  />
);

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  searchTxt: selectSearchTxt(),
});

const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => {
    dispatch(changeSearchTxt(ev.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);