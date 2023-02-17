import React, { useState, useEffect } from "react";
import { AdminBase } from "../pages/adminbase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const AdminUsers = () => {
    const [users, setUsers] = useState();


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
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {users?.map(() => (

                            <TableRow
                                key=""
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>

                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </AdminBase >
    );
}

