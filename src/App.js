import React, { Component } from 'react';
import Routes from './Route';
import Nav1 from './Nav1';
import {
  BrowserRouter as Router
} from "react-router-dom";


class App extends Component {
  render(){
  return (
    <Router>
          <Nav1/>
          <Routes/>
    </Router>
      );
    }
  }

export default App;
