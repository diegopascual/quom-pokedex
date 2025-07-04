import { Link } from "@tanstack/react-router";

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              alt="Pokemon Logo"
            />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
