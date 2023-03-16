import React, { useState, useEffect } from "react";
import { AdminMessages } from "../http/provider"
import { AdminBase } from "../../../pages/adminbase";
import { AdminContactList } from "./admincontactlist";

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
                    <AdminContactList con={con} index={index} setContact={setContact} />
                ))
            }
        </AdminBase>
    )
}