import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">Futebol ao Sabado</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/table" className='nav-link'>Table</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/players" className='nav-link'>Players</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/games" className='nav-link'>Matches</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>



        )
    }
}

