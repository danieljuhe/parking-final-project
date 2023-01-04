import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <Link to="/login">
              <button className="btn btn-primary">Log in</button>
            </Link>
          ) : (
            <button
              onClick={() => {
                actions.removeToken();
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="btn btn-primary"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
