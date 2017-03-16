import React from 'react';
import { connect } from 'react-redux';
import Segment from 'components/Segment';
import { Icon } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectList } from '../List/selectors';
import { selectListTotal } from '../selectors';
import './style.css';

export const SummaryComponent = ({ total, list }) => (
  <Segment raise="2" className="smry-w">
    <div className="smry-info">
      <span className="smry-lbl">Total:</span> <span className="smry-val">{total}</span>
      <span className="smry-lbl">Showing:</span> <span className="smry-val">{list.size}</span>
    </div>
    <a className="smry-source" href="https://github.com/dadish/skyscrapers-app" target="_blank">
      <Icon name="github" size="large"/>
    </a>
  </Segment>
);

const mapStateToProps = createStructuredSelector({
  total: selectListTotal(),
  list: selectList(),
});

export default connect(mapStateToProps)(SummaryComponent);