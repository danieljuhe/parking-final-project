import React, { useState } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { AdminUserModal } from "./adminusermodal";
import swal from "sweetalert";

export const AdminUserList = ({ user, roles, index, setUsers, setRoles }) => {


    const mostrarAlerta = () => {
        swal({
            title: "App Parking",
            text: "Plaza seleccionada con exito",
            icon: "success",
            button: "Aceptar",
            timer: "9000"

        })
        navigate("/Privateuser");
    }

    const EraseUser = async () => {

        const response = await fetch(process.env.BACKEND_URL + "/api/delete_users/" + user.id,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(user),
            })
        if (response.ok) {
            setUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser.id !== user.id));
        }
    };

    return (
        <TableRow
            key={index}
            className={user.id}
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
                <Button variant="contained" onClick={EraseUser}>
                    <DeleteForeverOutlinedIcon />
                </Button>
            </TableCell>
            <AdminUserModal user={user} roles={roles} setUsers={setUsers} />
        </TableRow>
    )
}