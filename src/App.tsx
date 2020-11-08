import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import RedirectPage from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokedex" component={Pokedex} />
        <Route render={RedirectPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
