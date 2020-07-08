import React, {useContext, useEffect, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import AlgoContext from "../../context/Algorithms/algoContext"
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',

        },


    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
const SettingDropDown = () => {
    const algoContext = useContext(AlgoContext)
    const {animationSpeed, setAnimationSpeed, size, setSize, resetArray} = algoContext
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
            <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}
                {props.children}
                <span className="icon-right"><h1>{props.rightIcon}</h1></span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem rightIcon={'Size'}>
                        <PrettoSlider
                            min={3}
                            max={80}
                            step={1}
                            value={size}
                            valueLabelDisplay="auto"
                            aria-labelledby="non-linear-slider"
                            onChange={(e,value) => {
                                setSize(value)
                                resetArray()
                            }} color={"red"}
                        />

                    </DropdownItem>
                    <DropdownItem rightIcon={'Speed'}>

                        <PrettoSlider
                            min={1}
                            max={60}
                            step={0.1}
                            value={animationSpeed}
                            valueLabelDisplay="auto"
                            aria-labelledby="non-linear-slider"
                            onChange={(e,value) => {
                                setAnimationSpeed(value)
                            }}

                            />

                    </DropdownItem>

                    <DropdownItem>

                        <h1 onClick={() => {
                            resetArray()
                        }}>Reset Array</h1>
                    </DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
};

export default SettingDropDown;