import { useAuth } from '../../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  if (!user) return <h2 style={{ padding: '20px' }}>Завантаження...</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Профіль користувача</h1>
      <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
        {user.image && (
          <img src={user.image} alt="avatar" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px' }} />
        )}
        <p><strong>Ім'я користувача:</strong> {user.username || '—'}</p>
        <p><strong>Email:</strong> {user.email || '—'}</p>
        <p><strong>Ім'я:</strong> {user.firstName || '—'}</p>
        <p><strong>Прізвище:</strong> {user.lastName || '—'}</p>
        <p><strong>Роль:</strong> {user.role || '—'}</p>
      </div>
    </div>
  );
}

export default Profile;