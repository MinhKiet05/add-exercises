import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </>
  );
}
