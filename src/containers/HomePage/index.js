import React from 'react';
import Skyscrapers from 'containers/Skyscrapers';
import { Grid } from 'semantic-ui-react';

const { Column } = Grid;

const Home = () => (
  <Grid columns="equal" centered>
    <Column width={12}>
      <Skyscrapers />
    </Column>
  </Grid>
);

export default Home;
