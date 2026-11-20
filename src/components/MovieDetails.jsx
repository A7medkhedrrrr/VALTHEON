const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="details-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {movie.poster_path && (
          <img className="details-poster" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        )}
        <div className="details-content">
          <p className="section-eyebrow">MOVIE DETAILS</p>
          <h2>{movie.title}</h2>
          <p className="details-meta">
            {movie.release_date ? movie.release_date.slice(0, 4) : "Unknown year"}
            <span>•</span>
            ★ {movie.vote_average?.toFixed(1) || "No rating"}
          </p>
          <p className="details-overview">
            {movie.overview || "There is no description available for this movie yet."}
          </p>
          <button className="primary-button small-button" onClick={onClose}>Back to movies</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;