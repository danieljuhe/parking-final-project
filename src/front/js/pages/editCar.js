import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const params = useParams();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/get_onecar/" + params.car_id)
      .then((res) => res.json())
      .then();
  }, []);

  const handleSubmit = () => {
    fetch(process.env.BACKEND_URL + "/api/edit_car/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        listOfCars(response);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="Plate" className="form-label">
          Plate
        </label>
        <input
          type="Plate"
          className="form-control"
          id="Plate"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="Brand" className="form-label">
          Brand
        </label>
        <input
          type="Brand"
          className="form-control"
          id="Brand"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="Model" className="form-label">
          Model
        </label>
        <input
          type="Model"
          className="form-control"
          id="Model"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="button" className="btn btn-secondary">
        Guardar
      </button>
    </form>
  );
};

export default EditCar;
