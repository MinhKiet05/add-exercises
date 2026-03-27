import { useState } from 'react';

export default function SumComponent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <input 
        placeholder="Số thứ nhất" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
      />
      <input 
        placeholder="Số thứ hai" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
      />
      <button onClick={handleSum}>Tính tổng</button>
      <p data-testid="result-text">Kết quả là: {result}</p>
    </div>
  );
}