import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-estin.png';

const Navbar = () => {
    return (
        <nav className="estin-navbar">
            <div className="navbar-header">
                <img src={logo} alt="ESTIN Logo" className="navbar-logo" />
                <p className="navbar-slogan">Higher School of Computer Science and Digital Technologies</p>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/visits">Featured Visits</NavLink></li>
                <li><NavLink to="/customize">Customize Your Visit</NavLink></li>
            </ul>
            <button className="navbar-button">Get Informed</button>
        </nav>
    );
}

export default Navbar;