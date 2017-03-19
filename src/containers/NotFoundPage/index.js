import React from 'react';
import Segment from 'components/Segment';

const NotFound = () => (
  <Segment
    raise="2"
    style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
      textAlign: 'center',
    }}
  >
    <h1>404 Not Found</h1>
  </Segment>
);

export default NotFound;