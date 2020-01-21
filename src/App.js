import React from 'react';
import GlobalStyled from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <>
    <GlobalStyled />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
