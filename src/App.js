import React, {useContext} from 'react';
import SotingVisualizer from "./Sorting/SotingVisualizer";
//Importing context
import {ReactComponent as Cog} from './Layout/icons/cog.svg';
import {ReactComponent as Start} from './Layout/icons/start.svg';
import {ReactComponent as CaretIcon} from './Layout/icons/caret.svg';
import AlgoState from "./context/Algorithms/algoState";
import Navbar from "./Layout/NavBar/Navbar";
import NavItem from "./Layout/NavBar/NavItem";
import DropDownMenu from "./Layout/NavBar/DropDownMenu";
import SettingDropDown from "./Layout/NavBar/settingDropDown";

function App() {
    return (
        <AlgoState>
            <div>

                <Navbar>
                    <div className={'start'}>
                        <NavItem icon={<Start/>} play={true} type={'start'}/>
                    </div>
                    <NavItem icon={<CaretIcon/>}><DropDownMenu/></NavItem>
                    <NavItem icon={<Cog/>}>
                        <SettingDropDown/>
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
