import {
    RESET_ARRAY, SET_ANIMATION_SPEED, SET_CURRENT, SET_OPEN, SET_SIZE

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
        case SET_CURRENT:
            return {
                ...state,
                currentlySelected:action.payload
            }
        case SET_ANIMATION_SPEED:
            return {
                ...state,
                animationSpeed:action.payload
            }
        case SET_OPEN:
            return {
                ...state,
                open:action.payload
            }
        default:
            return state
    }
}