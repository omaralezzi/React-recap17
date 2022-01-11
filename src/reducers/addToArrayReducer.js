import {actions} from '../actions/actions'

export const addToArrayReducer = (array, action) => {
    switch(action.type) {
        case actions.ADD:
            return [...array, action.payload]
        case actions.CLEAR:
            return array = []
        case actions.ADD_NUMBER:
            return [...array, action.payload]
        default: 
            return array
    }
}