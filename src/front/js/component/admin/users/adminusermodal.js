import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import { UsersList } from "../http/provider";


export const AdminUserModal = ({ user, roles, setUsers }) => {

    const [userData, setUserData] = useState({})
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const senddata = async () => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/api/modify_users/" + user.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            console.log(data);
            UsersList(setUsers)
        }
        catch (error) { console.error("Error:", error); }

    };

    useEffect(() => {
        setUserData(user)
    }, [])

    return (
        <div class="modal fade" id={`exampleModal${user.id}`} aria-labelledby={`#exampleModalLabel${user.id}`} aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar datos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Typography component="h5">Rol de usuario</Typography><br />
                        <TextField
                            id="outlined-select-currency"
                            size="small"
                            onChange={handleChange}
                            name="role_id"
                            select
                            fullWidth
                            defaultValue="None"
                        >
                            {roles?.map((role) => (
                                <MenuItem key={role.id} value={role.id}>
                                    {role.id}-{role.name}
                                </MenuItem>
                            ))}
                        </TextField><br /><br />

                        <Typography component="h5">Nombre completo</Typography><br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    autoComplete="given-name"
                                    name="name"
                                    onChange={handleChange}
                                    id="firstName"
                                    label={user.name}
                                    autoFocus
                                    placeholder={user.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    id="lastName"
                                    onChange={handleChange}
                                    label={user.surname}
                                    name="surname"
                                    autoComplete="family-name"
                                    placeholder={user.surname}
                                />
                            </Grid>
                        </Grid><br />

                        <Typography component="h5">Email</Typography><br />
                        <TextField
                            size="small"
                            id="email"
                            onChange={handleChange}
                            fullWidth
                            label={user.email}
                            name="email"
                            autoComplete="email"
                            placeholder={user.email}
                        /><br /><br />

                        <Typography component="h5">Movil</Typography><br />
                        <TextField
                            size="small"
                            fullWidth
                            onChange={handleChange}
                            id="movil"
                            label={user.telephone}
                            name="telephone"
                            placeholder={user.telephone}
                        /><br /><br />

                        <Typography component="h5">Password</Typography><br />
                        <TextField
                            size="small"
                            fullWidth
                            name="password"
                            label="Password"
                            onChange={handleChange}
                            type="password"
                            id="password"
                            autoComplete="new-password"
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