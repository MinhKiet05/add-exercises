import { useEffect, useState } from 'react'
export default function UseEffectExample() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count thay đổi:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}