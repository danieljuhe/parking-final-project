import React, { useState } from "react";

const CreateCar = () => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/car", {
      methods: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="category"
          onChange={handleChange}
        >
          <option disabled selected>
            Seleccione su categoria
          </option>
          {categories.map((value, index) => {
            return (
              <option key={index} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Plate
        </label>
        <input
          name="plate"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Brand
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="brand"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Model
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="model"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default CreateCar;
