import React from "react";

export const UsersCarList = async () => {
    try {
        const response = await fetch(process.env.BACKEND_URL + '/api/users_cars_list',
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        console.log(response);
        if (response.ok) {
            const listData = await response.json();
            setCarsList(listData)
        } else if (response.status === 400) {
            throw new Error('Bad request. Client error')
        } else if (response.status === 401) {
            throw new Error('Unauthorized. API authentication needed')
        } else if (response.status === 204) {
            throw new Error('Not content')
        } else {
            throw new Error('Unknown error, please review terminal')
        }
    } catch (error) {
        console.log(error)
    }

}