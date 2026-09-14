import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

function Movies() {
    return (
        <>
            <h1>Розклад кінотеатру</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
}

export default Movies;