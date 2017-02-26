import React from 'react';
import SkyscrapersList from 'containers/SkyscrapersList';
import { Grid } from 'semantic-ui-react';

const { Column } = Grid;

const Home = () => (
  <Grid columns={2} centered>
    <Column>
      <SkyscrapersList />
    </Column>
  </Grid>
);

export default Home;
