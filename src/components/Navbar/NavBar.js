import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            Sobre
          </NavLink>
        </li>
     
      </ul>

        <NavLink to="/about">
        <button className="right-button">Entrar em contato</button>
        </NavLink>
    </nav>
  );
};

export default Navbar;
