import React from 'react';

const MARKER_WIDTH = 30;
const MARKER_HEIGHT = 50;

const style = {
  width: MARKER_WIDTH,
  height: MARKER_HEIGHT,
  left: - MARKER_WIDTH / 2,
  top: - MARKER_HEIGHT,
};

const Marker = ({ skyscraper }) => (
  <div className="map-marker-w">
    <div
      className="map-marker"
      style={style}
    />
  </div>
);

export default Marker;