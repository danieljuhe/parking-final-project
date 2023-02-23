import React from "react";

export const UsersCarList = () => {
    fetch(process.env.BACKEND_URL + "/api/users_cars_list", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            setCarsList(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

}