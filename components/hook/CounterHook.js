import React, { useReducer } from "react";

function CounterHook() {
  const initialCount = {
    fistCounter: 0,
    SecondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "decrease":
        return { ...state, fistCounter: state.fistCounter + action.value };
      case "increase":
        return { ...state, fistCounter: state.fistCounter - action.value };
      case "increase5":
        return { ...state, SecondCounter: state.SecondCounter + action.value };
      case "reset":
        return initialCount;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <p>
        frist count is {count.fistCounter} second count is {count.SecondCounter}
      </p>
      <button onClick={() => dispatch({ type: "reset" })}> reset</button>
      <button onClick={() => dispatch({ type: "decrease", value: 2 })}>
        decrease 2
      </button>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        increase one
      </button>
      <button onClick={() => dispatch({ type: "increase5", value: 5 })}>
        increase five
      </button>
    </div>
  );
}

export default CounterHook;
