import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./car";
import swal from "sweetalert";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cars = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (car) => setOpen(car);
  const handleClose = () => setOpen(false);
  const [listOfCars, setListOfCars] = useState([]);
  const navigate = useNavigate();


  const alertaEliminar = () => {
    swal({
      title: "Seguro desea elimar el coche?",
      icon: "warning",
      buttons: ["Cancelar", "Elimanar"]

    })
  }

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/list_car")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setListOfCars(response);
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
    })
      .then((response) => response.json())
      .then((data) => {
        setListOfCars(listOfCars.filter(car => car.id != id));
      });
  };

  return (
    <div className="container">
      <div className="row ">
        {listOfCars?.map((car, index) => {
          return (
            <div key={index}>
              <Car
                brand={car.brand}
                plate={car.plate}
                model={car.model}
                category={car.category.name}
              />
              <Stack spacing={2} direction="row" className="container my-2">
                <Button variant="outlined"
                  onClick={() => handleEditClick(car.id)}
                >Editar
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => {
                    alertaEliminar()
                    handleOpen(car)
                  }}
                >Eliminar</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <button onClick={handleClose} className="cancelar">X</button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      WARNING
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Seguro que desea elimiar el {open.brand} {open.model}?
                    </Typography>
                    <button className="confirmar"
                      onClick={() => {
                        handleDeleteClick(open.id);
                        handleClose();
                      }}
                    >Eliminar</button>
                  </Box>
                </Modal>
                <Button variant="outlined"
                  onClick={() => navigate("/parking")}
                >Seleccionar
                </Button>
              </Stack>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Cars




/*    <div className="container">
    <div className="row text-center">
      {listOfCars?.map((car, index) => {
        return (
          <div className="col-6 col-md-6 mt-2 mb-2" key={index}>
            <Car
              brand={car.brand}
              plate={car.plate}
              model={car.model}
              category={car.category_id.name}
            />
            <button
              onClick={() => handleEditClick(car.id)}
              type="button"
              className="btn btn-secondary rounded-circle mt-2 me-2"
            >
              <i class="far fa-edit"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger rounded-circle mt-2 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">WARNING</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Seguro que desea elimiar el vehiculo seleccionado?
                  </div>
                  <div className="modal-footer">
                    <button type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal">
                      Cerrar</button>
                    <button type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(car.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>*/
