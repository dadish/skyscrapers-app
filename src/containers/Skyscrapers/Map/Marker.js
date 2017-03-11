import React, { PureComponent } from 'react';
import { Popup } from 'semantic-ui-react';
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
    const { skyscraper } = this.props;
    const active = skyscraper.get('active');
    return (
      <Popup 
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

export default Marker;