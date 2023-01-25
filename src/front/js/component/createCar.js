import React, { useState, useEffect } from "react";
import "../../styles/login.css";

const CreateCar = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCategories(response);
      });
    fetch(process.env.BACKEND_URL + "/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/create_car", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      });
  };

  return (
    <div className="main">
      <div className="register">
        <form onSubmit={handleSubmit} className="container">
          <div className="mb-3">
            <label htmlFor="inputCategory" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="category_id"
              onChange={handleChange}
            >
              <option disabled selected>
                Seleccione su categoria
              </option>
              {categories.map((value) => {
                return (
                  <option key={value.id} value={value.id}>
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
      </div>
    </div>
  );
};
export default CreateCar;
