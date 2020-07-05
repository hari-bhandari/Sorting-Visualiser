import React, {useContext, useEffect, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import AlgoContext from "../../context/Algorithms/algoContext";

const SettingDropDown = () => {
    const algoContext = useContext(AlgoContext)
    const {animationSpeed,setAnimationSpeed,size,setSize,resetArray} = algoContext
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
                        <input type="range" min="3" max="60" value={size} step={1} className="slider" onChange={(e)=>{
                            setSize(e.target.value)
                            resetArray()
                        }} defaultValue={size} value={size} id="myRange"/>
                    </DropdownItem>
                    <DropdownItem rightIcon={'Speed'}>
                        <input type="range" min="3" max="60" value={animationSpeed} step={1} className="slider" onChange={(e)=>{
                            setAnimationSpeed(e.target.value)
                            // resetArray()
                        }} defaultValue={animationSpeed} value={animationSpeed} id="animationSpeed"/>
                    </DropdownItem>

                    <DropdownItem>

                        <h1 onClick={()=>{
                            resetArray()
                        }}>Reset Array</h1>
                    </DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
};

export default SettingDropDown;