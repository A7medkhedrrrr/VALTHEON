const Hero = ({ onExplore }) => {
  return (
    <section className="hero" id="discover">
      <div className="hero-image"></div>
      <div className="hero-shade"></div>
      <div className="hero-content">
        <p className="eyebrow"><span></span> THE WORLD OF CINEMA</p>
        <h1>Find the film<br />that <em>moves</em> you.</h1>
        <p className="hero-description">
          Stories worth remembering. Discover films, explore new worlds,
          and find your next favorite.
        </p>
        <button className="primary-button" onClick={onExplore}>
          Explore movies <span>↗</span>
        </button>
      </div>
      <div className="hero-note">
        <span>01 / 03</span>
        <span className="note-line"></span>
        <span>CURATED FOR YOU</span>
      </div>
    </section>
  );
};

export default Hero;