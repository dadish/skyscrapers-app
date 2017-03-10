import React from 'react';
import Segment from 'components/Segment';
import GoogleMap from 'google-map-react';

export const SkyMap = () => (
  <Segment>
    <GoogleMap
      bootstrapURLKeys={{
        key: 'AIzaSyCq4M8-Auy3xw_8eIKjn1YsKms20iMU4Qk',
        v: 3,
      }}
    >
    </GoogleMap>
  </Segment>
);

export default SkyMap;