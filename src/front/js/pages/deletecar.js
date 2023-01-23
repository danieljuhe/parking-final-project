import React from "react";

const DeleteCar = () => {
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
            <button type="button" className="btn btn-secondary">
              Eliminar
            </button>
            <button type="button" className="btn btn-primary">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
