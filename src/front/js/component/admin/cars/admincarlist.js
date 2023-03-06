import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { AdminCarsModal } from "./admincarsmodal";


export const AdminCarList = ({ car, index }) => {
    return (
        <TableRow
            key={index}
            className={car.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{car.id}</TableCell>
            <TableCell align="right">{car.plate}</TableCell>
            <TableCell align="right">{car.brand}</TableCell>
            <TableCell align="right">{car.model}</TableCell>
            <TableCell align="right">{car.category.name}</TableCell>
            <TableCell align="right">
                <Button
                    variant="contained"
                    size="small"
                    data-bs-target={`#exampleModal${car.id}`}
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
            <AdminCarsModal car={car} />
        </TableRow>
    )
}