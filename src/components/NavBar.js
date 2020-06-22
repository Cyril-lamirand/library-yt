import React from 'react';
import logo from "../logo.svg";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bar fixed-top">
            <a className="navbar-brand" href="index.html">
                <img src={logo} className="App-logo" alt={props.siteTitle} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
