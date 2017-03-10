import React from 'react';
import Segment from 'components/Segment';
import GoogleMap from 'google-map-react';
import "./style.css";

const defaultCenter = {
  lat: 36.2115201,
  lng: -96.9470468,
};

export const SkyMap = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: '50%',
    }}
  >
    <Segment
      raise="1"
      style={{
        position: 'absolute',
        top: '4rem',
        bottom: '1rem',
        right: '1rem',
        left: '2rem',
      }}
    >
      <GoogleMap
        defaultCenter={defaultCenter}
        defaultZoom={4}
        bootstrapURLKeys={{
          key: 'AIzaSyCq4M8-Auy3xw_8eIKjn1YsKms20iMU4Qk',
          v: 3,
        }}
      >
      </GoogleMap>
    </Segment>
  </div>

);

export default SkyMap;