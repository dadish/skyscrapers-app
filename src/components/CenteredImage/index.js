import React, { PropTypes } from 'react';
import "./style.css";

const CenteredImage = ({ width, height, alt, src, ...rest }) => (
  <div
    className="ctrd-img"
    style={{
      background: `url(${src}) no-repeat center center`,
    }}
  />
);

CenteredImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CenteredImage;