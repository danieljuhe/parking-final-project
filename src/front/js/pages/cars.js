import { faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Car from "./car";

const Cars = () => {
  const [listOfCars, setListOfCars] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/list_car/")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setListOfCars(response);
      });
  }, []);

  return (
    <div className="container">
      <h3>Cars</h3>
      <div className="row text-center">
        {listOfCars?.map((car, index) => {
          return (
            <div className="col-6 col-md-3" key={index}>
              <Car
                brand={car.brand}
                plate={car.plate}
                model={car.model}
                category={car.caregory}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
