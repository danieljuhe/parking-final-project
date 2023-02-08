import React, { useState, useEffect } from "react";


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

    return <div>

        <div className="container">
            <div className="row text-center">
                <div>
                    {showBills && showBills[0].user.name}
                    <br />
                    {showBills && showBills[0].date}
                    <br />
                    {showBills && showBills[0].amount}
                    <br />
                    {showBills && showBills[0].user.id}
                    <br />

                </div>
            </div>
        </div>
    </div>

}

export default Bills;
