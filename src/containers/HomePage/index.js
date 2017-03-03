import React from 'react';
import Skyscrapers from 'containers/Skyscrapers';
import { Grid } from 'semantic-ui-react';

const { Column } = Grid;

const Home = () => (
  <Grid columns={2} centered>
    <Column>
      <Skyscrapers />
    </Column>
  </Grid>
);

export default Home;
