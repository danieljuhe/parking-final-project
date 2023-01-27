import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [listOfCars, setListOfCars] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      })
  }, []);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/get_onecar/" + params.car_id)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setListOfCars(response);
      })
  }, []);

  const handleSubmit = () => {
    fetch(process.env.BACKEND_URL + "/api/edit_car/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listOfCars),
    })
      .then((response) => response.json())
      .then((data) => {
        setListOfCars(data);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="Plate" className="form-label">
          Plate
        </label>
        <input
          type="text"
          placeholder={listOfCars.plate}
          className="form-control"
          id="Plate"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setListOfCars({ ...listOfCars, plate: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label for="Brand" className="form-label">
          Brand
        </label>
        <input
          type="Brand"
          placeholder={listOfCars.brand}
          className="form-control"
          id="Brand"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setListOfCars({ ...listOfCars, brand: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label for="Model" className="form-label">
          Model
        </label>
        <input
          type="Model"
          placeholder={listOfCars.model}
          className="form-control"
          id="Model"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputCategory" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="category_id"
        >
          <option
            disabled selected
          >
          </option>
          {categories.map((value) => {
            return (
              <option key={value.id} value={value.id} placeholder={listOfCars.category}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <button type="button" className="btn btn-secondary">
        Guardar
      </button>
    </form>
  );
};

export default EditCar;
