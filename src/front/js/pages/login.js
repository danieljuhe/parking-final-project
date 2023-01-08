import React from "react";
import "../../styles/login.css";
import { LoginForm } from "../component/loginform";

export const Login = () => {
  return (
    <div className="main">
      <div className="login">
        <h1>Log In</h1>
        <br />
        <LoginForm />
      </div>
    </div>
  );
};
