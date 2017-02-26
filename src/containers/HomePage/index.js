import React from 'react';
import SkyscrapersMap from 'containers/SkyscrapersMap';
import SkyscrapersList from 'containers/SkyscrapersList';

const Home = () => (
  <div className="sky-w">
    <SkyscrapersList />
    <SkyscrapersMap />
  </div>
);

export default Home;
