import React, { useState, useEffect } from "react";
import "../../styles/map.css"
import { Base } from "../pages/base";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Contacto = () => {

    const [user, setUser] = useState()
    const [mensaje, setMensaje] = useState()


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
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(message),
            });
            const data = await response.json();
            console.log(data);
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
                    <div className="styled-input wide">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={`${user && user.name}, ${user && user.surname}`}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={user && user.email}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input" >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label={user && user.telephone}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
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