import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cars.css";
import Car from "./car";
import { Base } from "../pages/base";
import { Context } from "../store/appContext";
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import CreateCar from "../component/createCar";
import { Button } from "@mui/material";
import ToysIcon from '@mui/icons-material/Toys';
import Stack from '@mui/material/Stack';



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
      <h3 className="htitle">Mis Coches</h3>
      <br />
      <div class="row row-cols-8 row-cols-md-2">
        {listOfCars && listOfCars.map((car, index) => {
          return (
            <>
              <div key={index}>
                <Car
                  brand={car.car.brand}
                  plate={car.car.plate}
                  model={car.car.model}
                  category={car.car.category.name}
                />
                <div className="my-2" role="group" aria-label="Basic outlined example">
                  <Button
                    className="btn btn1 mx-1"
                    size="small"
                    variant="contained"
                    onClick={() => handleEditClick(car.car.id)}
                  >Editar
                  </Button>

                  <Button
                    className="btn btn1 my-1 mx-1"
                    size="small"
                    variant="contained"
                    data-bs-target={`#exampleModal${car.car.id}`}
                    data-bs-toggle="modal"
                    type="button"
                  >Eliminar
                  </Button>
                  <div className="modal fade" id={`exampleModal${car.car.id}`} aria-labelledby={`#exampleModalLabel${car.car.id}`} aria-hidden="true">
                    <div className="modal-dialog position-absolute top-50 start-50 translate-middle">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={`exampleModalLabel${car.car.id}`}>IMPORTANTE!</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          Seguro que desea elimiar el {car.car.brand} {car.car.model}?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          {<button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={() => {
                              console.log("holaaaa")
                              handleDeleteClick(car.car.id);
                            }}>Eliminar</button>}
                        </div>
                      </div>
                    </div>
                  </div>
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


      </div>
      <div className="centrarCaja">
        <Button type="button" class="btn btn1 mx-auto mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" endIcon={<ToysIcon />}>
          Añadir Coche
        </Button>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog position-absolute top-50 start-50 translate-middle carmax">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir coche</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <CreateCar listOfCars={listOfCars} setListOfCars={setListOfCars} />
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