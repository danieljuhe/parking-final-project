import React, { useState, useEffect } from "react";
import "../../styles/login.css";

const CarsInfo = () => {
  const [form, setForm] = useState();
  const [cars, setCars] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/list_car")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCars(response);
      });

    fetch(process.env.BACKEND_URL + "/api/list_users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/create_car", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setForm(data);
      });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="container">
        <div className="register">
          <div className="mb-3">
            <select
              id="disabledSelect"
              className="form-select"
              onChange={handleChange}
            >
              <option disabled selected>
                Que coche vas a aparcar hoy?
              </option>
              {cars?.map((value, index) => {
                return (
                  <option key={index} value={value.id}>
                    {value.plate}, {value.brand}, {value.model}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <select id="disabledSelect" className="form-select">
              <option disabled selected>
                Usuario
              </option>
              {users?.map((value, index) => {
                return (
                  <option key={index} value={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="button" class="btn btn-light">
            registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarsInfo;
