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


export const AdminCars = () => {

    const [carsList, setCarsList] = useState();

    const UsersCarList = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + '/api/users_cars_list',
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
            console.log(response);
            if (response.ok) {
                const listData = await response.json();
                setCarsList(listData)
            } else if (response.status === 400) {
                throw new Error('Bad request. Client error')
            } else if (response.status === 401) {
                throw new Error('Unauthorized. API authentication needed')
            } else if (response.status === 204) {
                throw new Error('Not content')
            } else {
                throw new Error('Unknown error, please review terminal')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        UsersCarList()
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
                            <AdminCarList car={car} key={index} />
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase>
    )
}