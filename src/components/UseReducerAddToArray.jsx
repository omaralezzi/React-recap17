import { useReducer } from 'react';
import { actions } from '../actions/actions';
import { addToArrayReducer } from '../reducers/addToArrayReducer';
import { textReducer } from '../reducers/textReducer';

//Here we are using two useReducers. one that controls our input and the other to add the input to an array on a button click.
const UseReducerAddToArray = () => {
  const [text, dispatchText] = useReducer(textReducer, '');
  const [array, dispatchArray] = useReducer(addToArrayReducer, []);

  //If the submit button is clicked run this function.
  const addToArray = (e) => {
    e.preventDefault();
    dispatchArray({ type: actions.ADD, payload: text });
    dispatchText({ type: actions.RESET });
  };

  //If the add number button is clicked run this function
  const addNumber = (e) => {
    e.preventDefault();
    dispatchArray({ type: actions.ADD_NUMBER, payload: 89 });
  };

  //The onChange event will use our dispatchText dispatcher which in turn calls our textReducer function.

  return (
    <div>
      <form>
        <input
          type='text'
          value={text}
          onChange={(e) =>
            dispatchText({ type: actions.GRAB, payload: e.target.value })
          }
        />
        <button onClick={addToArray}>Add to state Array</button>
        <button onClick={() => dispatchArray({ type: actions.CLEAR })}>
          Clear Array
        </button>
        <button onClick={addNumber}>Add number</button>
      </form>
      {array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default UseReducerAddToArray;
