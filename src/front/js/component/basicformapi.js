import React, { useState } from "react";

export const BasicForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado");
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputname"
            aria-describedby="emailHelp"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputsurname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="inputsurname"
            aria-describedby="emailHelp"
            name="surname"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputemail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputemail"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputtelephone" className="form-label">
            Telephone
          </label>
          <input
            type="text"
            className="form-control"
            id="inputtelephone"
            aria-describedby="emailHelp"
            name="telephone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputpassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputpassword"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
