import { useState, memo, useCallback } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child render");
  return <button onClick={onClick}>Child button</button>;
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Click child");
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </>
  );
}
