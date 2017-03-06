import React from 'react';
import { Container } from 'semantic-ui-react';

const About = () => (
  <Container
    text
  >
    <h1>About Skyscrapers</h1>
    <p>
      This is an SPA built for demostration purposes. The app demonstrates how you can create minimal viable product using <a href="https://processwire.com" target="_blank">ProcessWire</a> with <a href="https://github.com/dadish/processgraphql" target="_blank">ProcessGraphQL</a>.
    </p>
  </Container>
);

export default About;