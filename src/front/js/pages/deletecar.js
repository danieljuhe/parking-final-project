import React, { useState, useEffect } from "react";

const DeleteCar = () => {

  const [listOfCars, setListOfCars] = useState({});

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/get_onecar/" + listOfCars.id)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setListOfCars(response);
      })
  }, []);

  const handleClick = () => {
    fetch(process.env.BACKEND_URL + "/api/delete_car/" + listOfCars.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listOfCars),
    })
      .then((response) => response.json())
      .then((data) => {
        setListOfCars(data);
      });
  }


  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Eliminar Vehiculo</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Seguro que desea eliminar el vehiculo seleccionado?</p>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={handleClick}>
              Eliminar
            </button>
            <button
              type="button"
              className="btn btn-primary">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
