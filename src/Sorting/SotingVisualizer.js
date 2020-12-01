import React, {Fragment, useEffect,useContext} from 'react';
import AlgoContext from "../context/Algorithms/algoContext";
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import{getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort'
import{getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort'
import{getQuickSortAnimations} from '../SortingAlgorithms/QuickSort'
import{getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort'
import './SortingVisualize.css'
import {ReactComponent as Start} from "../Layout/icons/start.svg";
import NavItem from "../Layout/NavBar/NavItem";
import Navbar from "../Layout/NavBar/Navbar";
import {ReactComponent as CaretIcon} from "../Layout/icons/caret.svg";
import {ReactComponent as Cog} from "../Layout/icons/cog.svg";

const SotingVisualizer = () => {

    const algoContext=useContext(AlgoContext)
    const {resetArray,array,size,currentlySelected,secondaryColour,primaryColour,animationSpeed}=algoContext
    // Change this value for the number of size (value) in the array.
    const  onStart=()=>{
        if(currentlySelected==='Bubble Sort'){
            bubbleSort()
        }
        if(currentlySelected==='Quick Sort'){
            quickSort()
        }
        if(currentlySelected==='Merge Sort'){
            mergeSort()
        }
        if(currentlySelected==='Selection Sort'){
            selectionSort()
        }
        if (currentlySelected==='Insertion Sort'){
            insertionSort()
        }
    }
    useEffect(()=>{
        resetArray()
        // eslint-disable-next-line
    },[])
    const WIDTH=()=>{
        return (75)/size
    }
    const mergeSort=()=>{
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? secondaryColour : primaryColour;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}vh`;
                }, i * animationSpeed);
            }
        }
    }
    const bubbleSort=()=> {
        const [animations,sortArray] = getBubbleSortAnimations(array);
        console.log(animations)
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 === 0) || (i % 4 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 4 === 0) ? secondaryColour : primaryColour;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    // barTwoStyle.backgroundColor = color

                },i * animationSpeed);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}vh`;
                },i * animationSpeed);
            }
        }
        // this.setState({array: sortArray})

    }
    const quickSort=()=> {
        const [animations,sortArray] = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length - 1; i++) {
            const isColorChange = (i % 6 === 0) || (i % 6 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 6 === 0) ? secondaryColour : primaryColour;
                const [barOneIndex, barTwoIndex] = animations[i];
                if(barOneIndex === -1) {
                    continue;
                }
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * animationSpeed);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}vh`;
                },i * animationSpeed);
            }
        }
        // this.setState({array: sortArray})
    }

    const insertionSort=()=> {
        const [animations,sortArray] = getInsertionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? secondaryColour : primaryColour;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * animationSpeed);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}vh`;
                },i * animationSpeed);
            }
        }
        // this.setState({array: sortArray})
    }
    const selectionSort=()=> {
        const [animations,sortArray] = getSelectionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? secondaryColour : primaryColour;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * animationSpeed);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}vh`;
                },i * animationSpeed);
            }
        }
    }

    return (
        <Fragment>
            <div className={'NavBar-sticky'}>

                <Navbar>
                    <NavItem icon={<Start/>} play={true} onStart={onStart}/>
                    <NavItem icon={<CaretIcon/>}/>
                    <NavItem icon={<Cog/>} type={'settings'}/>
                </Navbar>
            </div>
            <div className={"array-container"}>
                {array.map((value, index) => (
                    //,margin:`0 ${WIDTH()/6}%`
                    <div className={"array-bar"} key={index} style={{height: `${value}vh`,width:`${WIDTH()}%`,margin:`0 ${WIDTH()/6}%`}} />
                ))}
                <br/>
            </div>
        </Fragment>
    )
}
export default SotingVisualizer;