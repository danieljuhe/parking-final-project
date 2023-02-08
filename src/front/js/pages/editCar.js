import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const EditCar = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [listOfCars, setListOfCars] = useState({});
  const navigate = useNavigate();

  const alertaGuardar = () => {
    swal({
      title: "Cambios Guardados",
      icon: "success",
      button: "ok",
      timer: "1000"
    })
  }

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

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(process.env.BACKEND_URL + "/api/edit_car/" + listOfCars.id, {
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


  return listOfCars && listOfCars.model ? (
    <Box
      className="container mt-3"
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
      type="form"
      onSubmit={handleSubmit}
    >
      <div className="my-2">
        <TextField
          fullWidth label="Marca"
          required
          id="Brand"
          defaultValue={listOfCars.brand}
          onChange={(e) => {
            setListOfCars({ ...listOfCars, brand: e.target.value });
          }}
        />
      </div>
      <div className="my-2">
        <TextField
          fullWidth label="Modelo"
          required
          id="Model"
          defaultValue={listOfCars.model}
          onChange={(e) => {
            setListOfCars({ ...listOfCars, model: e.target.value });
          }}
        />
      </div>
      <div className="my-2">
        <TextField
          fullWidth label="Matricula"
          required
          id="Plate"
          defaultValue={listOfCars.plate}
          onChange={(e) => {
            setListOfCars({ ...listOfCars, plate: e.target.value });
          }}
        />
      </div>
      <div className="my-2">
        <TextField
          id="category"
          select
          fullWidth label="Categoria"
          defaultValue={listOfCars.category_id}
          name="category_id"
          onChange={(e) => {
            setListOfCars({ ...listOfCars, category_id: e.target.value });
          }}
        >
          {categories.map((value) => {
            return (
              <MenuItem
                key={value.id}
                value={value.id}
              >
                {value.name}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
      <Stack spacing={2} direction="row" className="container my-2">
        <Button
          variant="outlined"
          type="submit"
          onClick={alertaGuardar}
        >Guardar
        </Button>
        <Button
          onClick={() => navigate("/cars")}
          variant="outlined"
        >Cancelar
        </Button>
      </Stack>

    </Box>

    /*<form onSubmit={handleSubmit}>
      <div className="mb-3">
        image.png
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
          onChange={(e) => {
            setListOfCars({ ...listOfCars, model: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputCategory" className="form-label">
          Category {listOfCars.category_id.id}
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
              <option
                key={value.id}
                value={value.id}
                selected={listOfCars.category_id.id == value.id ? "selected" : ""}
              >
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
      >
        Guardar
      </button>
    </form>*/
  ) : "";
};

export default EditCar;
