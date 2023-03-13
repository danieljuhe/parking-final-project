import React, { useEffect } from "react";
import { AdminMessages } from "../http/provider"
import { AdminBase } from "../../../pages/adminbase";

export const AdminContact = () => {

    const [contact, setContact] = useState()

    useEffect(() => {
        AdminMessages(setContact)
    }, [])

    return (
        <AdminBase dashboard={true}>
            {
                contact?.map((con, index) => {
                    <div className="row" key={index}>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{con.message}</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </AdminBase>
    )
}