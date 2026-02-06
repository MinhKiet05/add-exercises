import { useReducer } from "react";

export default function UseReducerExample() {
  const init = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span> count is {state.count} </span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
