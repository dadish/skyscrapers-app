import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Popup } from 'semantic-ui-react';
import { selectPopupOpen } from '../selectors';
import * as a from '../actions';
import SkyItem from '../Item';

const MARKER_WIDTH = 30;
const MARKER_HEIGHT = 50;
const style = {
  width: MARKER_WIDTH,
  height: MARKER_HEIGHT,
  left: - MARKER_WIDTH / 2,
  top: - MARKER_HEIGHT,
};

const MARKER_WIDTH_ACTIVE = 35;
const MARKER_HEIGHT_ACTIVE = 60;
const active_style = {
  width: MARKER_WIDTH_ACTIVE,
  height: MARKER_HEIGHT_ACTIVE,
  left: - MARKER_WIDTH_ACTIVE / 2,
  top: - MARKER_HEIGHT_ACTIVE,
};

class Marker extends PureComponent {
  render () {
    const { skyscraper, handlePopupClose, handlePopupOpen, popupOpen } = this.props;
    const active = skyscraper.get('active');
    return (
      <Popup
        open={popupOpen}
        onClose={handlePopupClose}
        onOpen={handlePopupOpen}
        trigger={
          <div className="map-marker-w">
            <div
              className={active ? `map-marker active` : "map-marker"}
              style={active ? active_style : style}
            />
          </div>
        }
        content={<SkyItem skyscraper={skyscraper} popup />}
        on="click"
      />
    );
  }
}

const mapStateToProps = () => (state, { skyscraper, inPopup }) => ({
  popupOpen: selectPopupOpen(`marker_${skyscraper.get('id')}`)(state),
});

const mapDispatchToProps = (dispatch, { skyscraper }) => ({
  handlePopupOpen: () => dispatch(a.showPopup(`marker_${skyscraper.get('id')}`)),
  handlePopupClose: () => dispatch(a.hidePopup(`marker_${skyscraper.get('id')}`)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Marker);