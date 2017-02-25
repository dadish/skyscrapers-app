import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchTxt } from '../selectors';
import { changeSearchTxt } from '../actions';
import './style.css';

export const HeaderComponent = ({ handleChange, searchTxt }) => {
  return (
    <div className="trd-head">
      <input
        type="text"
        onChange={handleChange}
        value={searchTxt}
        placeholder="search..."
        autoFocus
      />
    </div>
  );
};

export const mapStateToProps = state => createStructuredSelector({
  searchTxt: selectSearchTxt(),
});

export const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => dispatch(changeSearchTxt(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);