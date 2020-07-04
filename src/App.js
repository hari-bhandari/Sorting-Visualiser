import React from 'react';
import SotingVisualizer from "./Sorting/SotingVisualizer";
import Navbar from "./Layout/Navbar";
//Importing context
import AlgoState from "./context/Algorithms/algoState";
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
