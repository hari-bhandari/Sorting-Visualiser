import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import {ReactComponent as CogIcon} from "../icons/cog.svg";
import {ReactComponent as ChevronIcon} from "../icons/chevron.svg";
import {ReactComponent as ArrowIcon} from "../icons/arrow.svg";
import {ReactComponent as BoltIcon} from "../icons/bolt.svg";

const SettingDropDown = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a  className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.leftIcon&&<span className="icon-button">{props.leftIcon}</span>}
                {props.children}
                <span className="icon-right"><h1>{props.rightIcon}</h1></span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem rightIcon={'Size'}>
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                    </DropdownItem>
                    <DropdownItem rightIcon={'Speed'}>
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                    </DropdownItem>
                    <DropdownItem>

                        <h1>Reset Array</h1>
                    </DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
};

export default SettingDropDown;