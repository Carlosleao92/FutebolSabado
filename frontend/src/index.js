import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import {BrowserRouter} from "react-router-dom";

import Navbar from './components/Bootstrap/Navbar'
import Router from './routes/Router'


ReactDOM.render(
    <BrowserRouter>
        <div className="App">
            <Navbar></Navbar>
            <Router></Router>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
