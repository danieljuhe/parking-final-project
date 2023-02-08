import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CreateCar = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const alertaEliminar = () => {
    swal({
      title: "Vehiculo Creado",
      text: " ",
      icon: "success",
      buttons: ["Ok",],
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
          variant="outlined"
          type="submit"
          onClick={() => {
            alertaEliminar()
            navigate("/cars")
          }}
        >Guardar
        </Button>
        <Button
          onClick={() => navigate("/cars")}
          variant="outlined"
        >Cancelar
        </Button>
      </Stack>
    </Box>
  )
};
export default CreateCar;
