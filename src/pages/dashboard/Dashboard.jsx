import {Link, Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <h3>Menu</h3>
        <ul>
          <li><Link to="profile">Hồ sơ người dùng</Link></li>
          <li><Link to="settings">Cài đặt</Link></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Bảng điều khiển chính</h2>
        <div style={{ background: 'red', padding: '10px' }}>
            <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;