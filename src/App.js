import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuxFourneaux from './screens/AuxFourneaux'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <AuxFourneaux />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
