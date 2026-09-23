import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuthorsList() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://frontend53.somee.com/api/authors')
      .then((response) => {
        if (!response.ok) throw new Error(`Помилка: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setAuthors(data.payload.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: '20px' }}>Завантаження...</h2>;
  if (error) return <h2 style={{ padding: '20px', color: 'red' }}>Помилка: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Список авторів</h1>
        <Link
          to="/authors/new"
          style={{ padding: '10px 15px', background: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px' }}
        >
          + Додати автора
        </Link>
      </div>

      {authors.length === 0 ? (
        <p>Авторів поки немає.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {authors.map((author) => (
            <li key={author.id} style={{ border: '1px solid gray', margin: '10px 0', padding: '10px', borderRadius: '5px', display: 'flex', gap: '15px', alignItems: 'center' }}>
              <img
                src={author.image}
                alt={author.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                onError={(e) => { e.target.src = 'https://picsum.photos/200/300'; }}
              />
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{author.name}</h3>
                <p style={{ margin: 0, fontSize: '0.9em', color: 'gray' }}>
                  {author.country} • {author.birth_date}
                </p>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.85em' }}>{author.biography}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AuthorsList;