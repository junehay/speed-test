import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Layout/Header';

import Grid from '@material-ui/core/Grid';

import VisualData from './components/Sort/VisualData';
import SettingBox from './components/Sort/SettingBox';
import ResultBox from './components/Sort/ResultBox';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <VisualData />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ display: 'inline-flex' }}>
            <SettingBox />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ResultBox />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
