import React, {useState} from 'react';
import SotingVisualizer from "./Sorting/SotingVisualizer";
import AlgoState from "./context/Algorithms/algoState";
import './App.css'
function App() {
    return (
        <AlgoState>
            <div>
                    <SotingVisualizer/>


            </div>
        </AlgoState>
    );
}


export default App;
