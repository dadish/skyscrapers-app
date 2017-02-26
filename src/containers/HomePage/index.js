import React from 'react';
import SkyscrapersMap from 'containers/SkyscrapersMap';
import SkyscrapersList from 'containers/SkyscrapersList';
import { Grid } from 'semantic-ui-react';

const Home = () => (
  <Grid columns={2}>
    <SkyscrapersList />
    <SkyscrapersMap />
  </Grid>
);

export default Home;
