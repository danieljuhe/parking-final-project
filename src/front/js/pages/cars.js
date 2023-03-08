import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cars.css";
import Car from "./car";
import { Base } from "../pages/base";
import { Context } from "../store/appContext";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import CreateCar from "../component/createCar";
import { Button } from "@mui/material";
import ToysIcon from '@mui/icons-material/Toys';
import EditCar from "./editCar";
import EditModal from "../component/editModal";
import DeleteModal from "../component/deleteModal";



const Cars = () => {
  const [listOfCars, setListOfCars] = useState();
  const { store, actions } = useContext(Context)

  const navigate = useNavigate();


  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/list_car", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
      .then((response) => {
        if (response.message) {
          console.log(response)
        } else {
          setListOfCars(response)
        }
      });
  }, [])

  const handleEditClick = (id) => {
    navigate("/editcar/" + id);
  };

  const handleDeleteClick = (id) => {
    console.log(id)
    fetch(process.env.BACKEND_URL + "/api/delete_car/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
      .then((data) => {
        setListOfCars(listOfCars.filter(car => car.car.id != id));
      });
  };
  const icons = [
    { icon: <DirectionsCarOutlinedIcon />, name: 'Create' }
  ];


  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));


  return (
    <Base listCars={true}>
      <div className="container">
        <div className="row">
          <h3>Mis Coches</h3>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {listOfCars && listOfCars.map((car, index) => {
              return (
                <>
                  <div className="col-12 col-md-6" key={index}>
                    <Car
                      brand={car.car.brand}
                      plate={car.car.plate}
                      model={car.car.model}
                      category={car.car.category.name}
                    />
                    <div className="container mt-2"
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                      <EditModal car={car} />
                      <DeleteModal car={car} handleDeleteClick={handleDeleteClick} />
                      <Button className="btn btn1 mx-1"
                        onClick={() => {
                          actions.setDefaultCar(car.car.id)
                          navigate("/parking")
                        }}
                        variant="contained"
                        size="small"
                      >Seleccionar
                      </Button>
                    </div>
                  </div>
                </>
              )
            })}
            <Box sx={{ position: 'relative', mt: 16, left: 146, height: 320 }} container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Button type="button" class="btn btn1" data-bs-toggle="modal" data-bs-target="#exampleModal" endIcon={<ToysIcon />}>
                Añadir Coche
              </Button>
            </Box>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir coche</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <CreateCar listOfCars={listOfCars} setListOfCars={setListOfCars} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Base >
  )
}

export default Cars

{/* <Button variant="contained" endIcon={<SendIcon />}>

</Button> */}