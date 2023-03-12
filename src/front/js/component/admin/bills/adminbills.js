import React, { useEffect, useState } from "react";
import { AdminBase } from "../../../pages/adminbase";
import { UsersBills } from "../http/provider";
import { AdminBillsList } from "./adminbillslist"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const AdminBills = () => {

    const [bills, setBills] = useState()

    useEffect(() => {
        UsersBills(setBills)
    }, [])

    return (
        <AdminBase dashboard={true}>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>

                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Stripe ID</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {bills?.map((bill, index) => (
                            <AdminBillsList bill={bill} key={index} />
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase>
    )
}