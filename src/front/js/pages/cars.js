import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./car";


const Cars = () => {
  const [listOfCars, setListOfCars] = useState([]);
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
    }).then((response) => response.json())
      .then((data) => {
        setListOfCars(listOfCars.filter(car => car.car.id != id));
      });
  };

  return (
    <div className="container">
      <div className="row">
        {listOfCars?.map((car, index) => {
          return (
            <div className="col-md-6" key={index}>
              <Car
                brand={car.car.brand}
                plate={car.car.plate}
                model={car.car.model}
                category={car.car.category.name}
              />
              <div className="container">
                <div className="mx-auto my-2 btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleEditClick(car.car.id)}
                  >Editar
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    data-bs-target={`#exampleModal${car.car.id}`}
                    data-bs-toggle="modal"
                    type="button"
                  >Eliminar
                  </button>
                  <div className="modal fade" id={`exampleModal${car.car.id}`} aria-labelledby={`#exampleModalLabel${car.car.id}`} aria-hidden="true">
                    <div className="modal-dialog">
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
                  <button
                    onClick={() => navigate("/parking")}
                    className="btn btn-outline-primary"
                  >Seleccionar
                  </button>
                </div>

              </div>

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
              <i className="far fa-edit"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger rounded-circle mt-2 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="far fa-trash-alt"></i>
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
