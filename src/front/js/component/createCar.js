import React, { useState, useEffect } from "react";
import "../../styles/cars.css";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Base } from "../pages/base";

const CreateCar = (props) => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const alertaCrear = () => {
    swal({
      title: "Vehiculo Creado",
      text: " ",
      icon: "success",
      button: "Ok",
      timmer: "1000"
    })
  }

  const alertaError = () => {
    swal({
      title: "ERROR",
      text: "Algo salio mal, intentalo de nuevo ",
      icon: "warning",
      timmer: "1000"
    })
  }

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
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.messageerror) {
          alertaError()
        } else {
          props.setListOfCars(data)
          setFormData(data);
          alertaCrear()
        }
      });
  };

  return (

    <Box
      className="container mt-3 col-8"
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
          id="category"
          select
          fullWidth label="Categoria"
          name="category_id"
          onChange={handleChange}
          required
        >
          {categories.map((value) => {
            return (
              <MenuItem
                key={value.id} value={value.id}>
                {value.name}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
      <div className="my-2">
        <TextField
          fullWidth label="Marca"
          required
          id="Brand"
          onChange={handleChange}
          name="brand"
          type="text"
        />
      </div>
      <div className="my-2">
        <TextField
          fullWidth label="Modelo"
          required
          id="Model"
          onChange={handleChange}
          name="model"
          type="text"
        />
      </div>
      <div className="my-2">
        <TextField
          fullWidth label="Matricula"
          required
          id="Plate"
          onChange={handleChange}
          name="plate"
          type="text"
        />
      </div>
      <Stack spacing={2} direction="row" className="container my-2">
        <Button
          className="btn btn1"
          variant="contained"
          type="submit"
          onClick={() => {
            handleSubmit()
          }}
          data-bs-dismiss="modal"
        >Guardar
        </Button>
        <Button
          className="btn btn1"
          onClick={() => navigate("/cars")}
          variant="contained"
          data-bs-dismiss="modal"
        >Cancelar
        </Button>
      </Stack>
    </Box>
  )
};
export default CreateCar;
