import React, { useState, useEffect } from "react";
import { AdminMessages } from "../http/provider"
import { AdminBase } from "../../../pages/adminbase";
import Button from '@mui/material/Button';

export const AdminContact = () => {

    const [contact, setContact] = useState()

    useEffect(() => {
        AdminMessages(setContact)
    }, [])

    return (
        <AdminBase dashboard={true}>
            <h1>Messages</h1>
            {
                contact?.map((con, index) => (

                    <div className="row" >
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                        <div className="card w-75 mb-4" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{con.name}</h5>
                                <h6 className="card-subtitle">{con.email}</h6>
                                <p className="card-text"><i>"{con.message}"</i></p>
                                <div className="card-text text-end">
                                    <Button variant="contained" size="small">Delete</Button>
                                </div>
                            </div>
                        </div><br />
                    </div>


                ))
            }
        </AdminBase>
    )
}