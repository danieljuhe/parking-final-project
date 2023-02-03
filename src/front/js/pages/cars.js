import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./car";

const Cars = () => {
  const [listOfCars, setListOfCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/list_car")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setListOfCars(response);
      });
  }, []);

  const handleEditClick = (id) => {
    navigate("/editcar/" + id);
  };


  const handleDeleteClick = (id) => {
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
                className="btn btn-secondary"
              >
                Editar
              </button>
              <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Eliminar
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
    </div>
  );
};

export default Cars;
