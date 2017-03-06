import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import {
  changeFilterTxt,
} from '../actions';

export const FilterComponent = ({ handleChange }) => (
  <Input
    fluid
    icon="search"
    placeholder="Filter cities..."
    onChange={handleChange}
  />
);

const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => dispatch(changeFilterTxt(ev.target.value)),
});

export default connect(null, mapDispatchToProps)(FilterComponent);