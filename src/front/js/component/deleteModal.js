import React from "react";
import { Button } from "@mui/material";

const DeleteModal = ({ car, handleDeleteClick }) => {
    return (<div>
        <Button
            className="btn btn1 mx-1"
            size="small"
            variant="contained"
            data-bs-target={`#deleteModal${car.car.id}`}
            data-bs-toggle="modal"
            type="button"
        >Eliminar
        </Button>
        <div className="modal fade " id={`deleteModal${car.car.id}`} aria-labelledby={`#deleteModalLabel${car.car.id}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`deleteModalLabel${car.car.id}`}>IMPORTANTE!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Seguro que desea elimiar el {car.car.brand} {car.car.model}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn1" data-bs-dismiss="modal">Cerrar</button>
                        {<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                            onClick={() => {
                                console.log("holaaaa")
                                handleDeleteClick(car.car.id);
                            }}>Eliminar</button>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DeleteModal