import { atom, useRecoilState } from 'recoil'; // Thêm dòng này
// // 1. Tạo một Atom
const fontSizeState = atom({
  key: 'fontSizeState', 
  default: 14,
});

// 2. Sử dụng trong Component (giống hệt useState)
export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  
  return (
    <button 
      onClick={() => setFontSize(fontSize + 1)} 
      style={{ fontSize: `${fontSize}px` }} // Cho chữ to lên trực tiếp để kiểm chứng
    >
      Click để phóng to: {fontSize}px 
    </button>
  );
}