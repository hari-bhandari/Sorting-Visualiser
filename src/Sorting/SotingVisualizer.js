import React, {Component, Fragment} from 'react';
import {getMergeSortAnimations} from './MergeSort';
import './SortingVisualize.css'
const ANIMATION_SPEED_MS = -100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SotingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        const array = []
        for (let i = 0; i < 320; i++) {
            array.push(randomIntFromIntervals(5, 730));
        }
        this.setState({array})
    }
    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
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

    render() {
        const {array} = this.state
        return (
            <Fragment>
                <div className={"array-container"}>
                    {array.map((value, index) => (
                        <div className={"array-bar"} key={index} style={{height: `${value}px`}}/>
                    ))}
                    <br/>
                    <button onClick={() => {
                        this.resetArray()
                    }}>Generate New Array
                    </button>
                    <button onClick={() => {
                        this.mergeSort()
                    }}>Merge Sort
                    </button>
                    <button onClick={() => {
                        this.resetArray()
                    }}>Generate New Array
                    </button>
                </div>
            </Fragment>
        );
    }
}

const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const arraysAreEqual=(array1,array2)=>{
    if(array1.length!==array2.length) return false
    for(let i=0;i<array1.length;i++){
        if (array1[i]!==array2[i]) return false
    }
    return true
}
export default SotingVisualizer;