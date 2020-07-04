import React, {useContext} from 'react';
import SotingVisualizer from "./Sorting/SotingVisualizer";
//Importing context
import {ReactComponent as Cog} from './Layout/icons/cog.svg';
import {ReactComponent as CaretIcon} from './Layout/icons/caret.svg';
import AlgoState from "./context/Algorithms/algoState";
import Navbar from "./Layout/NavBar/Navbar";
import NavItem from "./Layout/NavBar/NavItem";


function App() {
    return (
        <AlgoState>
            <div>

                <Navbar>

                    <NavItem icon={<CaretIcon/>}></NavItem>
                    <NavItem icon={<Cog/>} type={'settings'}>

                    </NavItem>
                </Navbar>

                <div>
                    <SotingVisualizer/>
                </div>

            </div>
        </AlgoState>
    );
}


export default App;
