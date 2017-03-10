import React from 'react';
import Segment from 'components/Segment';

const About = () => (
  <Segment
    raise="2"
    style={{
      maxWidth: '700px',
      margin: 'auto',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
    }}
  >
    <h1>About Skyscrapers</h1>
    <p>
      This is an SPA built for demostration purposes. The app demonstrates how you can create minimal viable product using <a href="https://processwire.com" target="_blank">ProcessWire</a> with <a href="https://github.com/dadish/processgraphql" target="_blank">ProcessGraphQL</a>.
    </p>
  </Segment>
);

export default About;