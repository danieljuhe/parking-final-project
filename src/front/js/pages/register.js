import React from "react";
import "../../styles/login.css";
import { Register } from "../component/registerform";

export const Reg = () => {
  return (
    <>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <div className="main">
        <div className="register">
          <Register />
        </div>
      </div>
    </>
  );
};
