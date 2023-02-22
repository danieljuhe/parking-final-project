import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { AdminUserModal } from "./adminusermodal";

export const AdminUserList = ({ user, roles }) => {
    return (
        <TableRow
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
                <Button variant="contained" >
                    <DeleteForeverOutlinedIcon />
                </Button>
            </TableCell>
            <AdminUserModal user={user} roles={roles} />
        </TableRow>
    )
}