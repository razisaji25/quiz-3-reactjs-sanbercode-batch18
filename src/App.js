import React from 'react';
import Routes from './Route';
import Nav from './Nav';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Nav/>
      <Routes/>
    </Router>
    
  );
}

export default App;
