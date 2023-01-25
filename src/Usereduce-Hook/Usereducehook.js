import React, { useReducer } from 'react'
import './../App.css';
function Usereducehook() {
  const initialCount = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    return state;
  }
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="User">
      <h2>useReduce hook in React</h2>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Usereducehook;