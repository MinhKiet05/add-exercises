import { useState } from 'react'
export default function UseStateExample() {
    const [count, setCount] = useState(0);
    return <>
        <h2>count is {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
            Tăng 1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
            Giảm 1
        </button>
        <button onClick={() => setCount((count) => 0)}>
            Reset
        </button>
    </>
}