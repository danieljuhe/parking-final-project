import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import swal from "sweetalert";
import { AdminMessages } from "../http/provider"


export const AdminContactList = ({ con, index, setContact }) => {


    const mostrarAlerta = () => {
        swal({
            title: "Mensaje eliminado con exito",
            text: "",
            icon: "success",
            button: "Aceptar",
            timer: "9000"

        })
    }


    const EraseChat = async () => {

        const response = await fetch(process.env.BACKEND_URL + "/api/delete_chat/" + con.id,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(con),
            })
        AdminMessages(setContact)
        mostrarAlerta()
    };

    return (
        <div className="row" >
            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            <div className="card w-75 mb-4" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{con.name}</h5>
                    <h6 className="card-subtitle">{con.email}</h6>
                    <p className="card-text"><i>"{con.message}"</i></p>
                    <div className="card-text text-end">
                        <Button variant="contained" size="small" onClick={EraseChat}>Delete</Button>
                    </div>
                </div>
            </div><br />
        </div>

    )
}