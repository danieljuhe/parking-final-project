import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';


export const AdminCarsModal = ({ car }) => {
    const handleChange = ""
    const senddata = []

    return (
        <div className="modal fade" id={`exampleModal${car.id}`} aria-labelledby={`#exampleModalLabel${car.id}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar datos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <Typography component="h5">Plate</Typography><br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    autoComplete="plate"
                                    name="plate"
                                    id="plate"
                                    label={car.plate}
                                    autoFocus
                                    placeholder={car.plate}
                                />
                            </Grid>
                        </Grid><br />

                        <Typography component="h5">Brand</Typography><br />
                        <TextField
                            size="small"
                            id="brand"
                            fullWidth
                            label={car.brand}
                            name="brand"
                            autoComplete="brand"
                            placeholder={car.brand}
                        /><br /><br />

                        <Typography component="h5">Model</Typography><br />
                        <TextField
                            size="small"
                            fullWidth
                            id="model"
                            label={car.model}
                            name="model"
                            placeholder={car.model}
                        /><br /><br />

                        <Typography component="h5">Category</Typography><br />
                        <TextField
                            size="small"
                            fullWidth
                            name="category"
                            label={car.category.name}
                            id="category"
                            autoComplete="category"
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={senddata}>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}