import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppContainer from './App';

const Root = () => (
  <HashRouter>
    <AppContainer />
  </HashRouter>
);

export default Root;
