import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    image: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch('https://frontend53.somee.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          throw new Error(data.message || 'Помилка реєстрації');
        }
        return fetch('https://frontend53.somee.com/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
      })
      .then((response) => response.json())
      .then((loginData) => {
        if (!loginData.success) {
          throw new Error(loginData.message || 'Помилка входу');
        }
        localStorage.setItem('token', loginData.payload);
        navigate('/profile');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Реєстрація</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label>
          Ім'я користувача (username):
          <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>
        <label>
          Ім'я:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>
        <label>
          Прізвище:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>
        <label>
          Посилання на фото (необов'язково):
          <input type="text" name="image" value={formData.image} onChange={handleChange} style={{ width: '100%', padding: '6px' }} />
        </label>

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