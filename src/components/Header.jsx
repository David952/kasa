import { NavLink } from 'react-router-dom'

import logo from '../assets/Header/logo.png'
 
function Header() {

    let linkDecoration = "linkActive";
    let linkNotActive = "linkNotActive";

    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='Logo Kasa'></img>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? linkDecoration : linkNotActive
                    }
                >
                  Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? linkDecoration : linkNotActive
                    }
                >
                  À Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;