import React from 'react';
import { Grid } from 'semantic-ui-react';

const { Column } = Grid;

const Home = ({ children }) => (
  <Grid columns="equal" centered>
    <Column width={12}>
      {children}
    </Column>
  </Grid>
);

export default Home;
