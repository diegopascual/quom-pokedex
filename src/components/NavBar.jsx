export const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon Logo"
          />
        </div>
        <div className="navbar__links">
          <a href="/pokemons">Pokemons</a>
          <a href="/games">Games</a>
        </div>
      </nav>
    </header>
  );
};
