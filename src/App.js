import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage';

const App = () => 
  <Router>
    <Switch>
      <Route exact path = "/" component={LandingPage} />
    </Switch>
  </Router>
export default App;
