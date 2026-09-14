function MovieCard({ movie }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", width: "250px" }}>
            <img src={movie.poster} alt={movie.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <div>
                <strong>Сеанси:</strong> {movie.sessions.join(", ")}
            </div>
        </div>
    );
}

export default MovieCard;