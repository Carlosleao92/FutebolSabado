import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./components/Navbar/Navbar"
import Router from "./routes/Router"
import {data} from "./data/data"

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router data={data}></Router>
    </div>
  );
}

export default App;
