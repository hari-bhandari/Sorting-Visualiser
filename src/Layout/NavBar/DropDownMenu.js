import React, {useEffect, useRef, useState, useContext} from 'react';
import {CSSTransition} from "react-transition-group";
import {ReactComponent as ChevronIcon} from "../icons/chevron.svg";
import AlgoContext from '../../context/Algorithms/algoContext'
import {getBubbleSortAnimations} from "../../SortingAlgorithms/BubbleSort";


const DropDownMenu = () => {
    const algoContext = useContext(AlgoContext)
    const {
        bubbleSort,
        quickSort, animationSpeed,
        primaryColour,
        secondaryColour,array
    } = algoContext

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
            <a href="#" className="menu-item"  onClick={props.onClickFunction()
            }>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }
    // const bubbleSort = () => {
    //     const [animations, sortArray] = getBubbleSortAnimations(array);
    //     console.log(animations)
    //     for (let i = 0; i < animations.length; i++) {
    //         const isColorChange = (i % 4 === 0) || (i % 4 === 1);
    //         const arrayBars = document.getElementsByClassName('array-bar');
    //         if (isColorChange === true) {
    //             const color = (i % 4 === 0) ? secondaryColour : primaryColour;
    //             const [barOneIndex, barTwoIndex] = animations[i];
    //             const barOneStyle = arrayBars[barOneIndex].style;
    //             const barTwoStyle = arrayBars[barTwoIndex].style;
    //             setTimeout(() => {
    //                 barOneStyle.backgroundColor = color;
    //                 barTwoStyle.backgroundColor = color
    //
    //             }, i * animationSpeed);
    //         } else {
    //             const [barIndex, newHeight] = animations[i];
    //             if (barIndex === -1) {
    //                 continue;
    //             }
    //             const barStyle = arrayBars[barIndex].style;
    //             setTimeout(() => {
    //                 barStyle.height = `${newHeight}px`;
    //             }, i * animationSpeed);
    //         }
    //     }
    //     // this.setState({array: sortArray})
    //
    // }
    return (
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={"BS"}
                        rightIcon={<ChevronIcon/>}
                        onClickFunction={bubbleSort}
                    >
                        Bubble Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"QS"}
                        rightIcon={<ChevronIcon/>}
                        onClickFunction={bubbleSort}
                    >
                        Quick Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"MS"}
                        rightIcon={<ChevronIcon/>}
                        onClickFunction={bubbleSort}
                    >
                        Merge Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"A"}
                        rightIcon={<ChevronIcon/>}
                        onClickFunction={bubbleSort}
                    >
                        Bubble Sort
                    </DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
};

export default DropDownMenu;