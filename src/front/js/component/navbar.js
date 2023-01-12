import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <Link to="/register">
          <span className="navbar-brand mb-0 h1">Registrate</span>
        </Link>
        <Link to="/login">
          <span className="navbar-brand mb-0 h1">Login</span>
        </Link>
        <div className="dot"></div>
      </div>
    </nav>
  );
};
