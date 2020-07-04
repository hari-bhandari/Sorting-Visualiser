import React, {useReducer} from "react";
import algoContext from "./algoContext";
import algoReducer from "./algoReducer"
import {BUBBLE_SORT, INSERTION_SORT, MERGE_SORT, QUICK_SORT, RESET_ARRAY, SELECTION_SORT, SET_SIZE} from '../types'

const AlgoState = props => {

    const initialState = {
        array: [],
        size: 30,
        animationSpeed: 40,
        primaryColour: 'turquoise',
        secondaryColour: 'red'

    }
    const [state, dispatch] = useReducer(algoReducer, initialState)
    //get one bootCamp
    const resetArray = () => {
        dispatch({
            type: RESET_ARRAY
        })
    }
    const setSize = (size) => {
        dispatch({
            type: SET_SIZE,
            payload: parseInt(size)
        })

    }
    const mergeSort = () => {
        dispatch({
            type: MERGE_SORT
        })
    }
    const bubbleSort = () => {
        dispatch({
            type: BUBBLE_SORT
        })
    }

    const quickSort = () => {
        dispatch({
            type: QUICK_SORT
        })
    }

    const insertionSort = () => {
        dispatch({
            type: INSERTION_SORT
        })
    }
    const selectionSort = () => {
        dispatch({
            type: SELECTION_SORT
        })
    }


    //get 1 bootcamp
    return (
        <algoContext.Provider value={{
            array: state.array,
            size: state.size,
            animationSpeed: state.animationSpeed,
            primaryColour:state.primaryColour,
            secondaryColour:state.secondaryColour,
            resetArray, setSize, mergeSort, bubbleSort, quickSort, selectionSort, insertionSort
        }}>{props.children}</algoContext.Provider>
    )

}
export default AlgoState;