import { useState, useEffect } from "react";

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "https://frontend53.somee.com/api/authors";

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Помилка сервера: ${response.status}`);
                }
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

    if (loading) return <h2>Завантаження авторів...</h2>;
    if (error) return <h2>Помилка: {error}</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Список авторів</h1>
            {authors.length === 0 ? (
                <p>Авторів поки немає.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {authors.map((author) => (
                        <li key={author.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px", borderRadius: "5px", display: "flex", gap: "15px", alignItems: "center" }}>
                            <img 
                                src={author.image} 
                                alt={author.name} 
                                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }} 
                            />
                            <div>
                                <h3 style={{ margin: "0 0 5px 0" }}>{author.name}</h3>
                                <p style={{ margin: "0", fontSize: "0.9em", color: "gray" }}>
                                    {author.country} • {author.birth_date}
                                </p>
                                <p style={{ margin: "5px 0 0 0", fontSize: "0.85em" }}>
                                    {author.biography}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AuthorList;