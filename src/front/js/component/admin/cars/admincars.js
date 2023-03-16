import React, { useEffect, useState } from "react";
import { AdminBase } from "../../../pages/adminbase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdminCarList } from "./admincarlist";
import { UsersCarList } from "../http/provider"
import { UsersCarCategories } from "../http/provider";


export const AdminCars = () => {

    const [carsList, setCarsList] = useState();
    const [carCategories, setCarCategories] = useState();


    useEffect(() => {
        UsersCarList(setCarsList);
        UsersCarCategories(setCarCategories);
    }, [])


    return (
        <AdminBase dashboard={true}>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>

                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Plate</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {carsList?.map((car, index) => (
                            <AdminCarList car={car} key={index} setCarsList={setCarsList} />
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase>
    )
}