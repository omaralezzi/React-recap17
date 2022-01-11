import { actions } from "../actions/actions";


//We have sent through the dispatcher an action object.
//The action object has two properties called type and payload.
//The type will tell us what action is to be performed.
//The payload tells us what data we need to use.
export const countReducer2 = (count, action) => {
    switch(action.type) {
        case actions.INCREMENT: 
            return count + action.payload;
        case actions.DECREMENT:
            return count - action.payload;
        case actions.RESET:
            return count = 0;
        default:
            return count
    }
}