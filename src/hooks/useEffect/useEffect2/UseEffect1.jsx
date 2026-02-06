import { useEffect } from 'react'
export default function UseEffectExample() {

  useEffect(() => {
    console.log("Chỉ chạy 1 lần");
  }, []);


  return <h1>Hello React</h1>;
}