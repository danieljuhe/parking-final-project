import React, { useState, useEffect } from "react";
import "../../styles/map.css"
import { Base } from "../pages/base";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import swal from "sweetalert";

export const Contacto = () => {

    const [user, setUser] = useState()
    const [mensaje, setMensaje] = useState()

    const mostrarAlerta = () => {
        swal({
            title: "Mensaje",
            text: "El mensaje se envio correctamente",
            icon: "success",
            button: "Aceptar",
            timer: "9000"
        })
    }

    const senddata = async () => {
        const message = {
            user_id: user.id,
            name: user.name,
            email: user.email,
            telephone: user.telephone,
            message: mensaje,
        };
        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(message),
            });
            const data = await response.json();
            console.log(data);
            setMensaje("")
            mostrarAlerta()
        }
        catch (error) { console.error("Error:", error) }
    };

    const GetUser = async () => {
        try {
            const call = await fetch(process.env.BACKEND_URL + "/api/user",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                })
            console.log(call)
            if (call.ok) {
                const user = await call.json()
                setUser(user)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        GetUser(setUser)
    }, [])

    return (
        <Base contacto={true}>
            <div className="row input-container">
                <div className="col-xs-12">
                    <h3 className="htitle">Déjanos tu Mensaje</h3>
                    <br />
                    <div className="styled-input wide">
                        <h4 >Nombre y Apellido</h4>

                        <h6>{user && user.name}, {user && user.surname} </h6>

                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <h4>Correo Electrónico</h4>
                        <h6>{user && user.email}</h6>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input" >
                        <h4>Número Telefónico</h4>
                        <h6>{user && user.telephone}</h6>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <TextField
                            id="filled-multiline-flexible"
                            margin="normal"
                            fullWidth
                            label="Mensaje"
                            onChange={(e) => setMensaje(e.target.value)}
                            multiline
                            value={mensaje}
                            rows={8}
                            autoFocus
                        />
                    </div>
                </div>
                <div className="col-xs-12">
                    <Button onClick={() => { senddata() }} variant="contained">Enviar</Button>
                </div>
            </div>
        </Base>
    )
}