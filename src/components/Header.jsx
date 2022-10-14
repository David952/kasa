import { NavLink } from 'react-router-dom';

import logo from '../assets/Header/logo.png';

function Header() {
  const linkDecoration = 'linkActive';
  const linkNotActive = 'linkNotActive';

  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Logo Kasa"></img>
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? linkDecoration : linkNotActive;
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? linkDecoration : linkNotActive;
          }}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
