import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetch('https://frontend53.somee.com/api/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Помилка: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setUser(data.payload || data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) return <h2 style={{ padding: '20px' }}>Завантаження профілю...</h2>;
  if (error) return <h2 style={{ padding: '20px', color: 'red' }}>Помилка: {error}</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Профіль користувача</h1>
      <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
        {user?.image && (
          <img src={user.image} alt="avatar" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px' }} />
        )}
        <p><strong>Ім'я користувача:</strong> {user?.username || '—'}</p>
        <p><strong>Email:</strong> {user?.email || '—'}</p>
        <p><strong>Ім'я:</strong> {user?.firstName || '—'}</p>
        <p><strong>Прізвище:</strong> {user?.lastName || '—'}</p>
        <p><strong>Роль:</strong> {user?.role || '—'}</p>
      </div>
    </div>
  );
}

export default Profile;