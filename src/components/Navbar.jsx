
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-estin.png'; // Adjust the relative path as needed

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center fw-bold fs-4 px-2" to="/">
                    <img src={logo} alt="ESTIN Logo" style={{ marginRight: '10px', height: '30px' }} /> 
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Clubs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
