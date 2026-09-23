import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', firstName: '', lastName: '', image: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register(formData);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Реєстрація</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" name="username" placeholder="Нікнейм" value={formData.username} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="firstName" placeholder="Ім'я" value={formData.firstName} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="lastName" placeholder="Прізвище" value={formData.lastName} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="image" placeholder="Посилання на фото (необов'язково)" value={formData.image} onChange={handleChange} style={{ padding: '8px' }} />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={loading} style={{ padding: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {loading ? 'Реєстрація...' : 'Зареєструватися'}
        </button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Вже маєте акаунт? <Link to="/login">Увійти</Link>
      </p>
    </div>
  );
}

export default Register;