import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <header>
        <div className="container">
            <h1 className="logo"></h1>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        </header>
    );
};

export default Navbar;