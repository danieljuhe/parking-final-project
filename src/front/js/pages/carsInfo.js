import React, { useState } from "react";
import "../../styles/login.css";

const CarsInfo = () => {
  const [myCars, setMyCars] = useState();
  const [cars, setCars] = useState();

  const handleChange = (event) => {
    setMyCars({ ...myCars, [event.target.name]: event.target.value });
  };

  return (
    <div className="main">
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
            {mycars.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.car}
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
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarsInfo;
