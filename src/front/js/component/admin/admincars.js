import React, { useEffect, useState } from "react";
import { AdminBase } from "../../pages/adminbase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import { AdminCarList } from "./admincarlist";


export const AdminCars = () => {

    const [carsList, setCarsList] = useState();

    useEffect(() => {

        fetch(process.env.BACKEND_URL + "/api/users_cars_list", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setCarsList(data);
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