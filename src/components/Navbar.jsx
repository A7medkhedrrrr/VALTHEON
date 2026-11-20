import logo from "../assets/logo.png";
const Navbar = ({ searchText, setSearchText, onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <header className="navbar">
      <a className="brand" href="#" onClick={(event) => event.preventDefault()}>
      <img className="brand-logo" src={logo} alt="VALTHEON" />
      </a>

      <nav className="nav-links">
        <a href="#discover">Discover</a>
        <a href="#popular">Popular</a>
      </nav>

      <form className="search-form" onSubmit={handleSubmit}>
        <span className="search-icon">⌕</span>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {searchText && (
          <button className="clear-search" type="button" onClick={() => setSearchText("")}>
            ×
          </button>
        )}
      </form>
    </header>
  );
};

export default Navbar;