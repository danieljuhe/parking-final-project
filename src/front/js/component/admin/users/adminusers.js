import React, { useState, useEffect } from "react";
import { AdminBase } from "../../../pages/adminbase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdminUserList } from "./adminuserlist";
import { UsersList } from "../http/provider";
import { UsersRoleList } from "../http/provider";


export const AdminUsers = () => {

    const [users, setUsers] = useState();
    const [roles, setRoles] = useState();

    useEffect(() => {
        UsersList(setUsers)
        UsersRoleList(setRoles)
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
                            <AdminUserList user={user} roles={roles} key={index} setUsers={setUsers} setRoles={setRoles} />
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase >
    );
}

