import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/privateuser");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <label htmlFor="username">
        <FontAwesomeIcon icon={faUser} />
        <>&nbsp;&nbsp;&nbsp;&nbsp;</>
        <input
          type="text"
          placeholder="E-Mail"
          onChange={handleChange}
          name="email"
          required
        />
      </label>
      <br />
      <label htmlFor="username">
        <FontAwesomeIcon icon={faLock} />
        <>&nbsp;&nbsp;&nbsp;&nbsp;</>
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          required
        />
      </label>
      <br />
      <button clasName="registerbutton" onClick={handleClick}>
        Login
      </button>
    </>
  );
};
