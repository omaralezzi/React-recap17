import {actions} from '../actions/actions'

export const textReducer = (text, action) => {
    switch(action.type) {
        case actions.GRAB:
            return text = action.payload;
        case actions.RESET:
            return text = ''
        default:
            return text
    }
}