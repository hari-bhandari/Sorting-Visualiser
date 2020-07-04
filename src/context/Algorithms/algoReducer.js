import {
    BUBBLE_SORT, INSERTION_SORT,
    MERGE_SORT, QUICK_SORT,
    RESET_ARRAY, SELECTION_SORT, SET_SIZE

} from '../types'
import {getMergeSortAnimations} from "../../SortingAlgorithms/MergeSort";
import {getBubbleSortAnimations} from "../../SortingAlgorithms/BubbleSort";
import {getQuickSortAnimations} from "../../SortingAlgorithms/QuickSort";
import {getInsertionSortAnimations} from "../../SortingAlgorithms/InsertionSort";
import {getSelectionSortAnimations} from "../../SortingAlgorithms/SelectionSort";

export default (state, action) => {
    switch (action.type) {
        case RESET_ARRAY:
            const randomIntFromIntervals = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            const stateArray=[]
            for(let i=0;i<state.size;i++){
                stateArray.push(randomIntFromIntervals(5,730))
            }
            return{
                ...state,
                array:stateArray
            }


        case SET_SIZE:
            return {
                ...state,
                size:action.payload
            }
        case MERGE_SORT:
            const animations = getMergeSortAnimations(state.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? state.secondaryColour : state.primaryColour;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * state.animationSpeed);
                } else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * state.animationSpeed);
                }
            }
        case BUBBLE_SORT:
            const [bubbleAnimations,sortArray] = getBubbleSortAnimations(state.array);
            console.log(bubbleAnimations)
            for (let i = 0; i < bubbleAnimations.length; i++) {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                if(isColorChange === true) {
                    const color = (i % 4 === 0) ? state.secondaryColour : state.primaryColour;
                    const [barOneIndex, barTwoIndex] = bubbleAnimations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * state.animationSpeed);
                }
                else {
                    const [barIndex, newHeight] = bubbleAnimations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    },i * state.animationSpeed);
                }
            }
        case QUICK_SORT:
            const [quickSortAnimation,second] = getQuickSortAnimations(state.array);
            for (let i = 0; i < bubbleAnimations.length - 1; i++) {
                const isColorChange = (i % 6 === 0) || (i % 6 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                console.log(arrayBars)
                if(isColorChange === true) {
                    const color = (i % 6 === 0) ? state.secondaryColour : state.primaryColour;
                    const [barOneIndex, barTwoIndex] = quickSortAnimation[i];
                    if(barOneIndex === -1) {
                        continue;
                    }
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * state.animationSpeed);
                }
                else {
                    const [barIndex, newHeight] = quickSortAnimation[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    },i * state.animationSpeed);
                }
            }
        case INSERTION_SORT:
            const [insertionSortAnimation,second1] = getInsertionSortAnimations(state.array);
            for (let i = 0; i < insertionSortAnimation.length; i++) {
                const isColorChange = (insertionSortAnimation[i][0] === "comparision1") || (insertionSortAnimation[i][0] === "comparision2");
                const arrayBars = document.getElementsByClassName('array-bar');
                if(isColorChange === true) {
                    const color = (insertionSortAnimation[i][0] === "comparision1") ? state.secondaryColour : state.primaryColour;
                    const [temp, barOneIndex, barTwoIndex] = insertionSortAnimation[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * state.animationSpeed);
                }
                else {
                    const [temp, barIndex, newHeight] = insertionSortAnimation[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    },i * state.animationSpeed);
                }
            }
        case SELECTION_SORT:
            const [selectionSortAnimation,second2] = getSelectionSortAnimations(state.array);
            for (let i = 0; i < selectionSortAnimation.length; i++) {
                const isColorChange = (selectionSortAnimation[i][0] === "comparision1") || (selectionSortAnimation[i][0] === "comparision2");
                const arrayBars = document.getElementsByClassName('array-bar');
                if(isColorChange === true) {
                    const color = (selectionSortAnimation[i][0] === "comparision1") ? state.secondaryColour : state.primaryColour;
                    const [temp, barOneIndex, barTwoIndex] = selectionSortAnimation[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * state.animationSpeed);
                }
                else {
                    const [temp, barIndex, newHeight] = selectionSortAnimation[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    },i * state.animationSpeed);
                }
            }
        default:
            return state
    }
}