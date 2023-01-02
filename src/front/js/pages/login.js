import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    let Navigate = useNavigate();

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
    if (localStorage.getItem("token")) {
      Navigate.push("/privateuser");
    }
  };

  return (
    <div className="text-center mt-5">
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
  );
};
