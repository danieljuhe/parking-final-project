import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const AdminBillsList = ({ bill, index }) => {
    return (
        <TableRow
            key={index}
            className={bill.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{bill.id}</TableCell>
            <TableCell align="right">{bill.stripe_id}</TableCell>
            <TableCell align="right">{bill.user.name}</TableCell>
            <TableCell align="right">{bill.date}</TableCell>
            <TableCell align="right">{bill.amount}</TableCell>
        </TableRow>
    )
}