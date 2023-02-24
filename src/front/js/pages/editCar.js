import React, { useEffect, useState } from "react";
import "../../styles/editcars.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Base } from "../pages/base";


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
        setCategories(response);
      })
  }, []);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/get_onecar/" + params.car_id)
      .then((response) => {
        return response.json();
      }).then((response) => {
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
        if (data.message) {
          alertaError()
        } else {
          setListOfCars(data)
          alertaGuardar()
          navigate("/cars")
        }

      });
  };

  return (
    <Base EditCar={true}>{
      listOfCars && listOfCars.id ? (
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
              className="btn btn1"
              size="small"
              variant="contained"
              type="submit"
              onClick={() => {
                handleSubmit()
              }}
            >Guardar
            </Button>
            <Button
              className="btn btn1"
              onClick={() => navigate("/cars")}
              size="small"
              variant="contained"
            >Cancelar
            </Button>
          </Stack>
        </Box>
      ) : ""
    }
    </Base>
  )
};

export default EditCar;
