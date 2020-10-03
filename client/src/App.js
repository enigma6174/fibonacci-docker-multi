import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Fib from './Fib';
import Main from './Main';
import About from './About';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>FIBONACCI CALCULATOR</h1>
          <Link to='/' style={{ marginLeft: 5 }}>Home</Link>
          <Link to='/main' style={{ marginLeft: 5 }}>Main</Link>
          <Link to='/about' style={{ marginLeft: 5 }}>About</Link>
        </header>
        <br />
        <div style={{ marginTop: 15 }}>
          <Switch>
            <Route exact path='/' component={Fib} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
