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


export const AdminParking = () => {

    const [usersParkingLot, setUsersParkingLot] = useState();
    console.log(usersParkingLot)
    const getUsersParkinglot = async () => {

        try {
            const response = await fetch(process.env.BACKEND_URL + '/api/users_parking_lot',
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
            console.log(response)

            if (response.ok) {
                const parkingList = await response.json();
                setUsersParkingLot(parkingList);
            } else if (response.status === 400) {
                throw new Error("Bad request. Client Error")
            } else if (response.status === 500) {
                throw new Error("Internal server Error")
            } else if (response.status === 404) {
                throw new Error("Not found")
            } else if (response.status === 403) {
                throw new Error("Unauthorized request")
            } else {
                throw new Error("Unknown error, please review the terminal")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsersParkinglot();
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
                            <AdminParkingList parkingLot={parkingLot} key={value} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AdminBase>
    )
}