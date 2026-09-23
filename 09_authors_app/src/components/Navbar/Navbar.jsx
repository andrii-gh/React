import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px 20px', background: '#333', color: 'white', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>Мій Додаток</h2>
      <Link to="/authors" style={{ color: 'white', textDecoration: 'none', padding: '8px 12px', background: '#555', borderRadius: '5px' }}>
        Список авторів
      </Link>
    </nav>
  );
}

export default Navbar;