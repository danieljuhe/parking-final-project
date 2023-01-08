import React, { useState, useEffect } from "react";

const CreateCar = () => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("se envia la informacion");
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="inputCategory" className="form-label">
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
        <label htmlFor="inputPlate" className="form-label">
          Plate
        </label>
        <input
          name="plate"
          type="text"
          className="form-control"
          id="inputPlate"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputBarnd" className="form-label">
          Brand
        </label>
        <input
          type="text"
          className="form-control"
          id="inputBarnd"
          name="brand"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputModel" className="form-label">
          Model
        </label>
        <input
          type="text"
          className="form-control"
          id="inputModel"
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
