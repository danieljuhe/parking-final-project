import React, { useState, useEffect } from "react";
import "../../styles/table.css";
import { Base } from "./base";

const Bills = () => {

    const [showBills, setShowBills] = useState();
    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/list_bills", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setShowBills(response);
            });
    }, []);

    return <Base bill={true} className="container p-4">
        <div className="container bill">
            <div className="row text-center">
                {
                    showBills && showBills.length ? (<>
                        <h3>Mis Facturas</h3>
                        <br />
                        <br />
                        <table className="table table-bordered border-dark table-sm table-striped ">
                            <thead className="tablecolor ">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Matrìcula</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showBills && showBills.map((bill) => {
                                    return (<tr>
                                        <th scope="row">{bill.user.name}</th>
                                        <th scope="row">{bill.user.email}</th>
                                        <th scope="row">{bill.date}</th>
                                        <th scope="row">{bill.amount}€</th>
                                        <th scope="row">{bill.parking_id.car_plate}</th>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                    ) : <h3>No hay facturas</h3>
                }
            </div>
        </div>
    </Base>


}

export default Bills;
