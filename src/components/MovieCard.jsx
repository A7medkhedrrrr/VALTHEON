const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, onSelect }) => {
  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "";

  return (
    <article className="movie-card" onClick={() => onSelect(movie)}>
      <div className="poster-wrap">
        {imageUrl ? (
          <img src={imageUrl} alt={movie.title} />
        ) : (
          <div className="poster-placeholder">No image available</div>
        )}
        <span className="rating">★ {movie.vote_average?.toFixed(1) || "—"}</span>
        <button className="view-button" onClick={(event) => {
          event.stopPropagation();
          onSelect(movie);
        }}>
          View details <span>↗</span>
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.slice(0, 4) : "Release date unknown"}</p>
      </div>
    </article>
  );
};

export default MovieCard;