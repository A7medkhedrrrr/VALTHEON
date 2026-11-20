import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import { getPopularMovies, searchMovies } from "./services/movieApi";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError("We couldn't load the movies. Please check your API key and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    if (searchText.trim() === "") {
      try {
        setLoading(true);
        setError("");
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await searchMovies(searchText);
      setMovies(data);
    } catch (error) {
      setError("We couldn't find movies right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExplore = () => {
    document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
      />

      <main>
        <Hero onExplore={handleExplore} />

        <section className="movies-section" id="popular">
          <SectionTitle
            eyebrow="A GOOD PLACE TO START"
            title={searchText ? "Search results" : "Popular right now"}
            description="A handpicked starting point for your next movie night."
          />

          {loading && <p className="status-message">Loading movies...</p>}

          {!loading && error && <p className="status-message error-message">{error}</p>}

          {!loading && !error && movies.length === 0 && (
            <p className="status-message">No movies found. Try another search.</p>
          )}

          {!loading && !error && movies.length > 0 && (
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#discover">VALTHEON<span>®</span></a>
        <p>Stories worth remembering.</p>
        <span className="copyright">MOVIE DISCOVERY · 2026</span>
      </footer>

      <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;