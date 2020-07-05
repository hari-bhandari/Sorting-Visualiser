import {
    CUSTOM_ARRAY,
    RESET_ARRAY, SET_ANIMATION_SPEED, SET_ARRAY_BOX, SET_CURRENT, SET_OPEN, SET_SIZE

} from '../types'
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
        case SET_ARRAY_BOX:
            return {
                ...state,
                arrayBox:action.payload
            }
        case CUSTOM_ARRAY:
            return{
                ...state,
                size:action.payload.length,
                array:action.payload
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