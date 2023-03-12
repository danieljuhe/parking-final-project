import React, { useEffect, useState } from "react";
import { AdminBase } from "../../../pages/adminbase";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { AdminParkingList } from "./adminparkinglist";
import { getUsersParkinglot } from "../http/provider";


export const AdminParking = () => {

    const [usersParkingLot, setUsersParkingLot] = useState();

    useEffect(() => {
        getUsersParkinglot(setUsersParkingLot);
    }, [])

    return (
        <AdminBase dashboard={true}>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>

                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Site</TableCell>
                            <TableCell align="right">Plate</TableCell>
                            <TableCell align="right">User ID</TableCell>
                            <TableCell align="right">Category ID</TableCell>
                            <TableCell align="right">Occupied</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {usersParkingLot?.map((parkingLot, value) => (
                            <AdminParkingList parkingLot={parkingLot} key={value} setUsersParkingLot={setUsersParkingLot} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase>
    )
}