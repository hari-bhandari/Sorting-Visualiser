import React, {Fragment, useEffect, useState,useContext} from 'react';
import AlgoContext from "../context/Algorithms/algoContext";
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import{getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort'
import{getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort'
import{getQuickSortAnimations} from '../SortingAlgorithms/QuickSort'
import{getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort'

import './SortingVisualize.css'
const ANIMATION_SPEED_MS = 3;

const SotingVisualizer = () => {
    const algoContext=useContext(AlgoContext)
    const {resetArray,array,size}=algoContext
    // Change this value for the number of size (value) in the array.


// This is the main color of the array size.
    const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';
    useEffect(()=>{
        resetArray()
    },[])
    const WIDTH=()=>{
        if (size < 13) {
            return -0.038709677419355 * size + 65
        } else if (size < 20) {
            return -0.038709677419355 * size + 40
        }
        else if(size <= 40){
            return -0.038709677419355*size + 20
        }
        else{
            return -0.038709677419355*size + 13
        }
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
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
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
                const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color

                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})

    }
    const quickSort=()=> {
        const [animations,sortArray] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length - 1; i++) {
            const isColorChange = (i % 6 === 0) || (i % 6 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                if(barOneIndex === -1) {
                    continue;
                }
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})
    }

    const insertionSort=()=> {
        const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})
    }
    const selectionSort=()=> {
        const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    return (
        <Fragment>
            <div className={"array-container"}>
                {array.map((value, index) => (
                    <div className={"array-bar"} key={index} style={{height: `${value}px`,width:`${WIDTH()}px`,margin:`0 ${WIDTH()/2}px`}}/>
                ))}
                <br/>
                <button onClick={() => {
                    bubbleSort()
                }}>Generate New Array
                </button>
                <button onClick={() => {
                    bubbleSort()
                }}>Merge Sort
                </button>
            </div>
        </Fragment>
    )
}
const arraysAreEqual=(array1,array2)=>{
    if(array1.length!==array2.length) return false
    for(let i=0;i<array1.length;i++){
        if (array1[i]!==array2[i]) return false
    }
    return true
}
export default SotingVisualizer;