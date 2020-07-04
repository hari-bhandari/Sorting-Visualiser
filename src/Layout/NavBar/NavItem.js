import React, {useState, useContext, useEffect} from 'react';
import DropDownMenu from "./DropDownMenu";
import settingDropDown from "./SettingDropDown";
import SettingDropDown from "./SettingDropDown";

const NavItem = (props) => {
    const[open,setOpen]=useState(false)
    if (props.play){
        return (
            <li className="nav-item-play">
                <a href="#" className="icon-button-play" onClick={() => setOpen(!open)}>
                    {props.icon}
                    <h1>Start</h1>
                </a>



                {/*{open && <SettingDropDown/>}*/}
            </li>
        )
    }
    if(props.type){
        return (
            <li className="nav-item">
                <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>

                {open && <SettingDropDown/> }
            </li>
        );
    }
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && <DropDownMenu/> }
        </li>
    );
};

export default NavItem;