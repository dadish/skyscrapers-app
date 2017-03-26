import React, { PropTypes } from 'react';
import "./style.css";

const CenteredImage = ({ src, style }) => (
  <div
    className="ctrd-img"
    style={{
      background: `url(${src}) no-repeat center center`,
      ...style,
    }}
  />
);

CenteredImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CenteredImage;