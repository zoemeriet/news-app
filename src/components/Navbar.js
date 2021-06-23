import React from "react";
import { NavLink } from "react-router-dom";

// Style
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li className="navbar__item"><NavLink activeClassName="active" to="/profil">Profil</NavLink></li>
      </ul>
    </nav>
  )
}