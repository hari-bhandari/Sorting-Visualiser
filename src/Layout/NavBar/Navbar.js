import React, {useContext} from 'react';
import './index.css';
import AlgoContext from "../../context/Algorithms/algoContext";

const Navbar = (props) => {
    const algoContext = useContext(AlgoContext)
    const {currentlySelected,setArrayBox,arrayBox,customArray} = algoContext
    return (
        <nav className="navbar">
            
            <ul className="navbar-nav">

                <li>
                    <div className={"array-box"}><input type="text" className={"array-box"} placeholder={"Please input your array with spaces in between Numbers"} onChange={(e)=>{
                    setArrayBox(e.target.value)
                }}/><a className="btn btn-white btn-mid Button1" onClick={()=>{
                    customArray(arrayBox)
                    }}>Visualize</a></div></li>

                <li className={"currently"}><h2>Currently Selected: </h2>
                <p >⠀⠀⠀⠀⠀{currentlySelected}</p></li>
                {props.children}</ul>
        </nav>
    );
};


export default Navbar;