import React from 'react';
import Header from './components/Layout/Header';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div className="App">app</div>
      </Container>
    </>
  );
};

export default App;
