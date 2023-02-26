import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const AdminParkingList = ({ parkingLot, value }) => {
    return (
        <TableRow
            key={value}
            className={parkingLot.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{parkingLot.id}</TableCell>
            <TableCell align="right">{parkingLot.site}</TableCell>
            <TableCell align="right">{parkingLot.car_plate}</TableCell>
            <TableCell align="right">{parkingLot.user_id}</TableCell>
            <TableCell align="right">{parkingLot.category_id}</TableCell>
            <TableCell align="right">{parkingLot.occupied}</TableCell>
            <TableCell align="right">
                <Button
                    variant="contained"
                    size="small"
                    data-bs-target={`#exampleModal${parkingLot.id}`}
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
    )
}