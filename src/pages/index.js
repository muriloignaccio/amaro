import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Products } from '../components';
import Home from './Home';

import './reset.scss';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/collections/:type/:product?' component={Products} />
      </Switch>
    </BrowserRouter>
  );
};
