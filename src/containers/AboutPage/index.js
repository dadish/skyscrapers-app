import React from 'react';

const About = () => (
  <div className="pg-w">
    <h1>About Seed</h1>
    <p>
      This boilerplate is an extension of the <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>.
      I basically created a CRA app and added libraries that I use a lot. The libraries included are:
    </p>
    <p>Dependencies:</p>
    <ul>
    <li>immutable</li>
    <li>lodash</li>
    <li>react</li>
    <li>react-dom</li>
    <li>react-redux</li>
    <li>react-router</li>
    <li>react-router-redux</li>
    <li>react-router-scroll</li>
    <li>redux</li>
    <li>redux-immutable</li>
    <li>redux-observable</li>
    <li>reselect</li>
    <li>rxjs</li>
    </ul>

    <p>Dev Dependencies:</p>
    <ul>
      <li>enzyme</li>
      <li>gh-pages</li>
      <li>react-addons-test-utils</li>
      <li>invariant</li>
      <li>warning</li>
      <li>react-scripts</li>
    </ul>

    <p>
    Most of the architechtural ideas are stolen from <a href="https://github.com/mxstbr" target="_blank">Max stoiber</a>'s <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">react-boilerplate</a>
    </p>
  </div>
);

export default About;