import { useState, memo, useCallback } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child render");
  return <button onClick={onClick}>Child button</button>;
});

export default function UseCallbackExample() {

  const handleClick = useCallback(() => {
    console.log("Click child");
  }, []);

  return (

      <Child onClick={handleClick} />

  );
}
