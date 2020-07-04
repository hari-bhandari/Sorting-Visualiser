import React from 'react';
import './Navbar.css'
const Navbar = ({mergeSort,resetArray}) => {
    return (
        <header>
        <div className="container">
            <h1 className="logo">hSorter</h1>

            <nav>
                <ul>
                    <li onClick={resetArray}>reset Array</li>
                    <li onClick={mergeSort}>Merge Sort</li>
                    <li>Quick Sort </li>
                    <li>Bubble Sort</li>
                </ul>
            </nav>
        </div>
        </header>
    );
};

export default Navbar;