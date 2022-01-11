import { useReducer } from 'react';
import { actions } from '../actions/actions';
import { countReducer2 } from '../reducers/countReducer2';

const UseReducerCounter2 = () => {
  const initializer = 0;

  //As before we receive two elements in an array from the useReducer hook.
  //We give it two paramters. The reducer function and an initializer
  //In our button click events below we use the dispatcher method(countDispatch) to call our reducer function(countReducer2)
  //Here instead of passing the reducer a string action, we use an object. The properties for this object
  //are sort of convention and will be type, which will be our action and our payload which will be the data we want to send our reducer function.
  const [count, countDispatch] = useReducer(countReducer2, initializer);
  return (
    <div>
      <button
        onClick={() => countDispatch({ type: actions.INCREMENT, payload: 5 })}>
        Increment
      </button>
      <button
        onClick={() => countDispatch({ type: actions.DECREMENT, payload: 2 })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: actions.RESET })}>
        Reset
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseReducerCounter2;
