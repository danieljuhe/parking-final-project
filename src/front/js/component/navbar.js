import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="title1">Logo</span>
        <Link to="/">
          <span className="title2">Home</span>
        </Link>
        <Link to="/register">
          <span className="title3">Registro</span>
        </Link>
        <Link to="/login">
          <span className="title4">Login</span>
        </Link>
      </div>
    </div>
  );
};
