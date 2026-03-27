import './App.css';
import { RecoilRoot } from 'recoil';
import FontButton from './components/FontButton.jsx';
function AppContent() {
  const {
    state: { count },
  } = useCount();

  return (
    <RecoilRoot>
      {/* Tất cả component dùng Recoil phải nằm trong này */}
      <FontButton />
    </RecoilRoot>
  );
}

export default function App() {
  return (
        <RecoilRoot>
      {/* Tất cả component dùng Recoil phải nằm trong này */}
      <FontButton />
    </RecoilRoot>
  );
}

