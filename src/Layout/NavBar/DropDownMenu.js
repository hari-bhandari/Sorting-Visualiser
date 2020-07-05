import React, {useEffect, useRef, useState, useContext} from 'react';
import {CSSTransition} from "react-transition-group";
import {ReactComponent as ChevronIcon} from "../icons/chevron.svg";
import AlgoContext from '../../context/Algorithms/algoContext'


const DropDownMenu = ({open,setOpen}) => {
    const algoContext = useContext(AlgoContext)
    const {setCurrentlySelected} = algoContext

    const [activeMenu] = useState('main');
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
            <a href="#" className="menu-item" onClick={() => {
                if (props.data){
                    setCurrentlySelected(props.data)
                    setOpen(false)

                }


            }
            }>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
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
                    <DropdownItem
                        leftIcon={"BS"}
                        rightIcon={<ChevronIcon/>}
                        data={"Bubble Sort"}
                    >
                        Bubble Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"QS"}
                        rightIcon={<ChevronIcon/>}
                        data={"Quick Sort"}
                    >
                        Quick Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"MS"}
                        rightIcon={<ChevronIcon/>}
                        data={"Merge Sort"}
                    >
                        Merge Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"SS"}
                        rightIcon={<ChevronIcon/>}
                        data={"Selection Sort"}
                    >
                        Selection Sort
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={"SS"}
                        rightIcon={<ChevronIcon/>}
                        data={"Insertion Sort"}
                    >
                        Insertion Sort
                    </DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
};

export default DropDownMenu;