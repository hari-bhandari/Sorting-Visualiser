import React, {useReducer} from "react";
import algoContext from "./algoContext";
import algoReducer from "./algoReducer"
import {RESET_ARRAY, SET_ANIMATION_SPEED, SET_CURRENT, SET_OPEN, SET_SIZE} from '../types'

const AlgoState = props => {

    const initialState = {
        array: [],
        size: 30,
        animationSpeed: 20,
        primaryColour: '#ED553B',
        secondaryColour: 'white',
        currentlySelected:'Bubble Sort',
        open:false

    }
    const [state, dispatch] = useReducer(algoReducer, initialState)
    //get one bootCamp
    const resetArray = () => {
        dispatch({
            type: RESET_ARRAY
        })
    }
    const setOpen=(value)=>{
        dispatch({
            type:SET_OPEN,
            payload:value
        })
    }
    const setCurrentlySelected=(value)=>{
        dispatch({
            type:SET_CURRENT,
            payload:value
        })
    }
    const setSize = (size) => {
        dispatch({
            type: SET_SIZE,
            payload: parseInt(size)
        })

    }
    const setAnimationSpeed=(val)=>{
        dispatch(
            {
                type:SET_ANIMATION_SPEED,
                payload:-1*val
            }
        )
    }

    //get 1 bootcamp
    return (
        <algoContext.Provider value={{
            array: state.array,
            size: state.size,
            animationSpeed: state.animationSpeed,
            primaryColour:state.primaryColour,
            secondaryColour:state.secondaryColour,
            currentlySelected:state.currentlySelected,
            open:state.open,
            setOpen,
            setCurrentlySelected,
            resetArray, setSize,setAnimationSpeed
        }}>{props.children}</algoContext.Provider>
    )

}
export default AlgoState;