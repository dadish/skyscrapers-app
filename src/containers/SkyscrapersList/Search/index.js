import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import {
  changeSearchTxt,
} from '../actions';

export const SearchComponent = ({ handleChange }) => (
  <Input
    fluid
    icon="search"
    placeholder="Search skyscrapers..."
    onChange={handleChange}
  />
);

const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => dispatch(changeSearchTxt(ev.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchComponent);