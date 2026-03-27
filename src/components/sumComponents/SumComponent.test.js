import { render, screen, fireEvent } from '@testing-library/react';
import SumComponent from './SumComponent';

test('Kiểm tra tính năng cộng hai số', () => {
  // 1. Render component ra môi trường test ảo
  render(<SumComponent />);

  // 2. Tìm các phần tử trên màn hình (như cách người dùng nhìn thấy)
  const input1 = screen.getByPlaceholderText('Số thứ nhất');
  const input2 = screen.getByPlaceholderText('Số thứ hai');
  const button = screen.getByText('Tính tổng');

  // 3. Giả lập hành động của người dùng
  fireEvent.change(input1, { target: { value: '10' } });
  fireEvent.change(input2, { target: { value: '20' } });
  fireEvent.click(button);

  // 4. Dùng Jest để kiểm tra kết quả có như mong đợi không
  const resultElement = screen.getByTestId('result-text');
  expect(resultElement).toHaveTextContent('Kết quả là: 30');
});