import React, { PropTypes } from 'react';
import "./style.css";

const CenteredImage = ({ src }) => (
  <div
    className="ctrd-img"
    style={{
      background: `url(${src}) no-repeat center center`,
    }}
  />
);

CenteredImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CenteredImage;