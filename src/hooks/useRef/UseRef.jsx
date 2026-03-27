import { useState, useEffect, useRef } from 'react';

export default function CompareValues() {
  const [count, setCount] = useState(0);
  
  // Biến tạm để lưu giá trị của count ở lần render TRƯỚC ĐÓ
  const prevCountRef = useRef();

  useEffect(() => {
    // Sau khi component render xong, lưu giá trị hiện tại vào ref
    // để chuẩn bị cho lần so sánh ở lần render kế tiếp
    prevCountRef.current = count;
  }, [count]); // Chạy mỗi khi count thay đổi

  const prevCount = prevCountRef.current;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hiện tại: {count}</h1>
      <h2>Lần trước đó: {prevCount !== undefined ? prevCount : "Chưa có"}</h2>
      
      <button onClick={() => setCount(count + 1)}>Tăng +1</button>
      <button onClick={() => setCount(count - 1)}>Giảm -1</button>
      
      <p style={{ fontStyle: 'italic', color: 'gray' }}>
        (Ghi chú: useRef lưu giá trị thầm lặng, không gây render lại UI 
        cho đến khi bạn chủ động trigger bằng useState)
      </p>
    </div>
  );
}