import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './views/Home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
