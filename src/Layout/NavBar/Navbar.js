import React from 'react';
import './index.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            
            <ul className="navbar-nav">
                <li><input type="text" className={"array-box"} placeholder={"Please input your array with spaces in between Numbers"}/></li>
                <li className={"currently"}><h2>Currently Selected: </h2>
                <p >⠀⠀⠀⠀⠀{`Bubble Sort`}</p></li>
                {props.children}</ul>
        </nav>
    );
};

export default Navbar;