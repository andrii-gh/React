import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px 20px', background: '#333', color: 'white', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>Мій Додаток</h2>
      {user ? (
        <>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none', padding: '8px 12px', background: '#555', borderRadius: '5px' }}>
            Профіль
          </Link>
          <span style={{ marginLeft: 'auto' }}>Привіт, {user.username}!</span>
          <button onClick={handleLogout} style={{ padding: '8px 12px', background: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Вийти
          </button>
        </>
      ) : (
        <>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none', padding: '8px 12px', background: '#555', borderRadius: '5px' }}>
            Реєстрація
          </Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', padding: '8px 12px', background: '#555', borderRadius: '5px' }}>
            Вхід
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;