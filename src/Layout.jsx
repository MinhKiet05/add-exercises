import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Trang chủ</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      
      <main style={{ padding: '20px' }}>
        <Outlet /> 
      </main>
      
      <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
        footer
      </footer>
    </div>
  );
}

export default Layout;