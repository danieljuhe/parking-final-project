import React, { useState } from "react";
import "../../styles/login.css";
import { Register } from "../component/registerform";
import { LoginForm } from "../component/loginform";

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
      <div className="reg">
        <Register />
      </div>
      <div className="log">
        <LoginForm />
      </div>
    </div>
  );
};
