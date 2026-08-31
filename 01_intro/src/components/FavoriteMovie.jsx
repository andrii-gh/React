
import './FavoriteMovie.css';

function FavoriteMovie() {
  const movie = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    studio: "Paramount Pictures",
    genre: "Наукова фантастика",
    duration: "169 хв",
    rating: "8.7",
    description: "Група дослідників використовує нещодавно виявлений просторово-часовий вимір, щоб подорожувати крізь час і знайти новий дім для людства.",
    cast: ["Меттью МакКонахі", "Енн Гетевей", "Джессіка Честейн", "Майкл Кейн"],
    poster: "https://via.placeholder.com/300x450/aa3bff/fff?text=Interstellar"
  };

  return (
    <div className="movie-container">
      <h1>{movie.title}</h1>
      <div className="movie-content">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
          <div className="rating">{movie.rating}/10</div>
        </div>
        <div className="movie-details">
          <div className="detail-item">
            <span className="label">Режисер:</span>
            <span className="value">{movie.director}</span>
          </div>
          <div className="detail-item">
            <span className="label">Рік випуску:</span>
            <span className="value">{movie.year}</span>
          </div>
          <div className="detail-item">
            <span className="label">Кіностудія:</span>
            <span className="value">{movie.studio}</span>
          </div>
          <div className="detail-item">
            <span className="label">Жанр:</span>
            <span className="value">{movie.genre}</span>
          </div>
          <div className="detail-item">
            <span className="label">Тривалість:</span>
            <span className="value">{movie.duration}</span>
          </div>
          <div className="detail-item full">
            <span className="label">Опис:</span>
            <p className="description">{movie.description}</p>
          </div>
          <div className="detail-item full">
            <span className="label">Акторський склад:</span>
            <div className="cast">
              {movie.cast.map((actor, index) => (
                <span key={index} className="actor-tag">{actor}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteMovie;