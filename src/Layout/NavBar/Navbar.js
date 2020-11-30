import React, {useContext} from 'react';
import './index.css';
import AlgoContext from "../../context/Algorithms/algoContext";

const Navbar = (props) => {
    const algoContext = useContext(AlgoContext)
    const {currentlySelected, setArrayBox, arrayBox, customArray,setOpen,open} = algoContext
    return (
        <nav className="navbar">

            <ul className="navbar-nav">
                <div className="input-field">
                    <li>
                        <div className="array-box-cont"><input type="text" className={"array-box"}
                                                            placeholder={"Please input your array with spaces in between Numbers"}
                                                            onChange={(e) => {

                                                                setArrayBox(e.target.value)

                                                            }}/><a className="btn btn-white btn-mid Button1"
                                                                   onClick={() => {
                                                                       if (arrayBox) {
                                                                           customArray(arrayBox)
                                                                       }
                                                                   }}>Visualize</a></div>
                    </li>
                </div>

                <div className="selected">

                    <li className={"currently"}><h2>Currently Selected: </h2>
                        <p>⠀⠀⠀⠀⠀{currentlySelected}</p></li>
                </div>
                <div className="icons-buttons">
                    {props.children}</div>
            </ul>
        </nav>
    );
};


export default Navbar;