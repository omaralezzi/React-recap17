import { useReducer, useState } from 'react';

//Here we declare our reducer function. As with other examples in this project
//it is better practice to separate out our reducer functions to their own files.
const countReducer = (count, action) => {
  switch (action) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    case 'reset':
      return (count = 0);
    default:
      return count;
  }
};

const UseReducerCounter = () => {
  const initializer = 0;

  const [state, setter] = useState(initializer); //This is here as an example of what a useState hook looks like in comparison to a useReducer hooks

  //As with the useState hook we get returned to us an array. As in the useState hook there are two elements in the array.
  //In the case of useState we get back the state and a setter method.
  //In the case of useReducer we get back the state and a dispatcher method.
  //In the case of useState we pass the hook an initializer as a parameter.
  //In the case of useReducer we pass a reducer function and an initializer
  const [count, countDispatch] = useReducer(countReducer, initializer);

  console.log(setter);

  //The dispatch method will call the reducer function. It will send it the state automatically, but we have to send the reducer function an action.
  //We do this through the dispatch method. This can be either a string or an object. In the example below we are sending the action as a string.
  //The reducer function will receive the state and this action. We can then manipulate the state received dependent on the action received
  //as in the countReducer function above. It is convention to use a switch statement to handle what action was sent and what to do to the state
  return (
    <div>
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
      <button onClick={() => setter(state + 1)}>state</button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseReducerCounter;
