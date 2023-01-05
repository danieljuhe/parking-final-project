import React, { useState, useEffect } from "react";
import "../../styles/login.css";
import { Register } from "../component/registerform";
import { LoginForm } from "../component/loginform";

export const Login = () => {
  return (
    <div className="main">
      <div className="register">
        <Register />
      </div>
      <div className="login">
        <LoginForm />
      </div>
    </div>
  );
};
