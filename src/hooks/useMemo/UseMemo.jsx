import { useState, memo } from "react";

const Child = memo(function Child() {
  console.log("Child render");
  return <p>Child component</p>;
});

export default function UseMemoExample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child />
    </>
  );
}
