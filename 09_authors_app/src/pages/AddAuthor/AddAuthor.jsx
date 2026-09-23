import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAuthor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    country: '',
    biography: '',
    birth_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch('https://frontend53.somee.com/api/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Помилка сервера: ${response.status}`);
        return response.json();
      })
      .then(() => {
        navigate('/authors');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Додати нового автора</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label>
          Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>

        <label>
          Посилання на фото:
          <input type="text" name="image" value={formData.image} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>

        <label>
          Країна:
          <input type="text" name="country" value={formData.country} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>

        <label>
          Біографія:
          <textarea name="biography" value={formData.biography} onChange={handleChange} rows={3} required style={{ width: '100%', padding: '6px' }} />
        </label>

        <label>
          Дата народження:
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} required style={{ width: '100%', padding: '6px' }} />
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={loading} style={{ padding: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {loading ? 'Збереження...' : 'Зберегти автора'}
        </button>
      </form>
    </div>
  );
}

export default AddAuthor;