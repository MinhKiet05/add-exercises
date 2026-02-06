import { useEffect } from 'react'
export default function UseEffectExample() {

  useEffect(() => {
    console.log("Render xong là chạy");
  });

  return <h1>Hello React</h1>;
}