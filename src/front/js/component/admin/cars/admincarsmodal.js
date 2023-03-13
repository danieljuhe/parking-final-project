import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import { UsersCarCategories } from "../http/provider";


export const AdminCarsModal = ({ car }) => {

    const [carsData, setCarsData] = useState({})
    const [carCategories, setCarCategories] = useState()

    const handleChange = (event) => {
        setCarsData({ ...carsData, [event.target.name]: event.target.value })
    }

    const senddata = async () => {

        try {
            const call = await fetch(process.env.BACKEND_URL + "/api/modify_users_cars/" + car.id,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify(carsData),
                })

            const data = await call.json()
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setCarsData(car)
        UsersCarCategories(setCarCategories)
    }, [])

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
                                    onChange={handleChange}
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
                            onChange={handleChange}
                            label={car.brand}
                            name="brand"
                            autoComplete="brand"
                            placeholder={car.brand}
                        /><br /><br />

                        <Typography component="h5">Model</Typography><br />
                        <TextField
                            size="small"
                            fullWidth
                            onChange={handleChange}
                            id="model"
                            label={car.model}
                            name="model"
                            placeholder={car.model}
                        /><br /><br />

                        <Typography component="h5">Category</Typography><br />
                        <TextField
                            id="outlined-select-currency"
                            size="small"
                            onChange={handleChange}
                            name="category_id"
                            defaultValue="None"
                            select
                            fullWidth
                        >
                            {carCategories?.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.id}-{category.name}
                                </MenuItem>
                            ))}
                        </TextField><br /><br />

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={senddata}>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}