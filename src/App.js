import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./Navbar"
import Router from "./Router"
import {data} from "./data.js"

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router data={data}></Router>
    </div>
  );
}

export default App;
