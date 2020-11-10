import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const ResultBox = () => {
  return (
    <Paper style={{ width: '100%', backgroundColor: 'lightgray', marginTop: '0px' }}>
      <div style={{ padding: '10px' }}>
        <h3>Result</h3>
        <hr style={{ margin: '10px 0px' }} />
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <span>result</span>
          </Grid>
          <Grid item xs={3}>
            <span>result</span>
          </Grid>
          <Grid item xs={3}>
            <span>result</span>
          </Grid>
          <Grid item xs={3}>
            <span>result</span>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default ResultBox;
