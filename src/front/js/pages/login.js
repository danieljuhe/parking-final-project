import React, { useState } from "react";
import "../../styles/login.css";
import { Register } from "../component/registerform";

export const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main">
      <div className="register">
        <h1>Registro</h1>
        <Register />
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="E-Mail"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};
