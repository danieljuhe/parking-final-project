import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Parking App</h1>
      <p>
        <img src="https://www.emesa-m30.es/wp-content/uploads/2018/07/estos-son-los-parkings-mas-cercanos-a-la-M30.jpg" />
      </p>
      <div className="alert alert-body-tertiary">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
    </div>
  );
};
