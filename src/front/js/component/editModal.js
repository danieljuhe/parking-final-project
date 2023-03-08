import React from "react";
import EditCar from "../pages/editCar";
import Button from '@mui/material/Button';

const EditModal = ({ car }) => {
    return (
        <div>
            <Button
                button type="button"
                size="small"
                variant="contained"
                class="btn btn1"
                data-bs-toggle="modal"
                data-bs-target={`#editModal${car.car.id}`}
            >Editar
            </Button>
            <div class="modal fade" id={`editModal${car.car.id}`} tabindex="-1" aria-labelledby={`#editModalLabel${car.car.id}`} aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={`editModalLabel${car.car.id}`}>Editar Coche</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <EditCar />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn1" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn1">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditModal