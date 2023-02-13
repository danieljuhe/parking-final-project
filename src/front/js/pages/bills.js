import React, { useState, useEffect } from "react";
import "../../styles/table.css";
import { Base } from "./base";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Bills = () => {

    const [showBills, setShowBills] = useState();
    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/list_bills", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setShowBills(response);
            });
    }, []);


    return (
        <Base>
            {
                showBills && showBills.length ? (<>
                    <h3 align="center">Mis facturas</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell className="tablecolor">Nombre</StyledTableCell>
                                    <StyledTableCell className="tablecolor" align="center">Email</StyledTableCell>
                                    <StyledTableCell className="tablecolor" align="center">Fecha</StyledTableCell>
                                    <StyledTableCell className="tablecolor" align="center">Monto</StyledTableCell>
                                    <StyledTableCell className="tablecolor" align="center">Matricula</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showBills && showBills.map((bill) => {
                                    return (
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                {bill.user.name}, {bill.user.surname}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{bill.user.email}</StyledTableCell>
                                            <StyledTableCell align="center">{bill.date}</StyledTableCell>
                                            <StyledTableCell align="center">{bill.amount}</StyledTableCell>
                                            <StyledTableCell align="center">{bill.parking_id.car_plate}</StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
                ) : <h3 align="center">No hay facturas</h3>
            }
        </Base >
    )

}

export default Bills;

/* <div className="container bill">
            <div className="row text-center">
                {
                    showBills && showBills.length ? (<>
                        <h3>Mis Facturas</h3>
                        <br />
                        <br />
                        <table className="table table-bordered border-dark table-sm table-striped ">
                            <thead className="tablecolor ">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Concepto</th>
                                    <th scope="col">Matrìcula</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showBills && showBills.map((bill) => {
                                    return (<tr>
                                        <th scope="row">{bill.user.name}</th>
                                        <th scope="row">{bill.user.email}</th>
                                        <th scope="row">{bill.date}</th>
                                        <th scope="row">{bill.amount}</th>
                                        <th scope="row">{bill.stripe_id}</th>
                                        <th scope="row">{bill.parking_id.car_plate}</th>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                    ) : <h3>No hay facturas</h3>
                }
            </div>
        </div> */