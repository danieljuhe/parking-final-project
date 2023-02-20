import React, { useState, useEffect } from "react";
import { AdminBase } from "../pages/adminbase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';


export const AdminUsers = () => {
    const [users, setUsers] = useState();
    const currencies = [
        {
            value: '1',
            label: 'Usuario',
        },
        {
            value: '2',
            label: 'Administrador',
        },
    ];

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const senddata = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/edit_user/" + user.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
        }
        catch (error) { console.error("Error:", error); }
    };


    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/list_users", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setUsers(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])

    return (
        <AdminBase dashboard={true}>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>

                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Rol</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Apellidos</TableCell>
                            <TableCell align="right">Movil</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Editar</TableCell>
                            <TableCell align="right">Eliminar</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {users?.map((user, index) => (
                            <>
                                <TableRow
                                    className={user.id}
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{user.id}</TableCell>
                                    <TableCell align="right">{user.role}</TableCell>
                                    <TableCell align="right">{user.name}</TableCell>
                                    <TableCell align="right">{user.surname}</TableCell>
                                    <TableCell align="right">{user.telephone}</TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            size="small"
                                            data-bs-target={`#exampleModal${user.id}`}
                                            data-bs-toggle="modal"
                                            type="button">
                                            <EditOutlinedIcon />
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" >
                                            <DeleteForeverOutlinedIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
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
                                                    select
                                                    fullWidth
                                                    label="Rol"
                                                    defaultValue="None"
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
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
                                                            label={user.surname}
                                                            name="surname"
                                                            onChange={handleChange}
                                                            autoComplete="family-name"
                                                            placeholder={user.surname}
                                                        />
                                                    </Grid>
                                                </Grid><br />

                                                <Typography component="h5">Email</Typography><br />
                                                <TextField
                                                    size="small"
                                                    id="email"
                                                    fullWidth
                                                    label={user.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                    autoComplete="email"
                                                    placeholder={user.email}
                                                /><br /><br />

                                                <Typography component="h5">Movil</Typography><br />
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="movil"
                                                    label={user.telephone}
                                                    name="telephone"
                                                    onChange={handleChange}
                                                    placeholder={user.telephone}
                                                /><br /><br />

                                                <Typography component="h5">Password</Typography><br />
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    onChange={handleChange}
                                                    id="password"
                                                    autoComplete="new-password"
                                                />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary">Guardar cambios</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase >
    );
}

