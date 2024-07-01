import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-estin.png'; // Adjust the relative path as needed

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex flex-row align-items-start ">
                <NavLink className="navbar-brand d-flex align-items-center fw-bold fs-4 my-3 mx-5" to="/">
                    <img src={logo} alt="ESTIN Logo" style={{ marginRight: '10px', height: '30px' }} />
                </NavLink>

                <div className="d-flex w-100">
                    <ul className="navbar-nav d-flex flex-row pt-3 pl-5 fw-bold ">
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
