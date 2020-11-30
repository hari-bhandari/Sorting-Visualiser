import React, {useState} from 'react';
import SotingVisualizer from "./Sorting/SotingVisualizer";
//Importing context
import {ReactComponent as Cog} from './Layout/icons/cog.svg';
import {ReactComponent as CaretIcon} from './Layout/icons/caret.svg';
import AlgoState from "./context/Algorithms/algoState";
import Navbar from "./Layout/NavBar/Navbar";
import NavItem from "./Layout/NavBar/NavItem";
import './App.css'
function App() {
    return (
        <AlgoState>
            <div>


                <div>
                    <SotingVisualizer/>
                </div>
                <button onClick={()=>{Function()}}>Start</button>


            </div>
        </AlgoState>
    );
}


export default App;
