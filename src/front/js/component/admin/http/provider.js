


export const UsersCarList = async (setCarsList) => {

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
        } else if (response.status === 500) {
            throw new Error("Internal server error")
        } else {
            throw new Error('Unknown error, please review terminal')
        }
    } catch (error) {
        console.error("Error", error)
    }

}

export const UsersCarCategories = async (setCarCategories) => {
    try {
        const response = await fetch(process.env.BACKEND_URL + '/api/users_cars_categories',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        console.log(response);
        if (response.ok) {
            const carcategories = await response.json();
            setCarCategories(carcategories)
        } else if (response.status === 400) {
            throw new Error("Bad request. Client error")
        } else if (response.status === 401) {
            throw new Error("Unauthorized. API authentication needed")
        } else if (response.status === 500) {
            throw new Error("Internal server error")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    }
    catch (error) {
        console.error('Error', error)
    }
}


export const UsersList = async (setUsers) => {

    try {
        const response = await fetch(process.env.BACKEND_URL + "/api/list_users",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        console.log(response);
        if (response.ok) {
            const listData = await response.json();
            setUsers(listData)
        } else if (response.status === 400) {
            throw new Error("Bad request. Client error")
        } else if (response.status === 401) {
            throw new Error("Unauthorized. API authentication needed")
        } else if (response.status === 500) {
            throw new Error("Internal server error")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    } catch (error) {
        console.error("Error", error)
    }

}


export const UsersRoleList = async (setRoles) => {

    try {
        const response = await fetch(process.env.BACKEND_URL + "/api/users_role",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
        console.log(response);
        if (response.ok) {
            const roledata = await response.json()
            setRoles(roledata)
        } else if (response.status === 400) {
            throw new Error("Bad request. Client error")
        } else if (response.status === 401) {
            throw new Error("Unauthorized. API authentication needed")
        } else if (response.status === 500) {
            throw new Error("Internal server error")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    }
    catch (error) {
        console.error("Error", error)
    }

}


export const UsersBills = async (setBills) => {

    try {
        const data = await fetch(process.env.BACKEND_URL + "/api/users_bills",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
        console.log(data)
        if (data.ok) {
            const response = await data.json()
            setBills(response)
        } else if (response.status === 400) {
            throw new Error("Bad request. Client error")
        } else if (response.status === 401) {
            throw new Error("Unauthorized. API authentication needed")
        } else if (response.status === 500) {
            throw new Error("Internal server error")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    }
    catch (error) {
        console.log(error)
    }
}

export const getUsersParkinglot = async (setUsersParkingLot) => {

    try {
        const response = await fetch(process.env.BACKEND_URL + '/api/users_parking_lot',
            {
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
        console.log(response)

        if (response.ok) {
            const parkingList = await response.json();
            setUsersParkingLot(parkingList);
        } else if (response.status === 400) {
            throw new Error("Bad request. Client Error")
        } else if (response.status === 500) {
            throw new Error("Internal server Error")
        } else if (response.status === 404) {
            throw new Error("Not found")
        } else if (response.status === 403) {
            throw new Error("Unauthorized request")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    } catch (error) {
        console.log(error)
    }
}


export const AdminMessages = async (setContact) => {

    try {
        const response = await fetch(process.env.BACKEND_URL + "/api/users_messages",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
        if (response.ok) {
            const call = await response.json()
            setContact(call)
        } else if (call.status === 400) {
            throw new Error("Bad request, client error. Please review the backend")
        } else if (response.status === 500) {
            throw new Error("Internal server Error")
        } else if (response.status === 404) {
            throw new Error("Not found")
        } else if (response.status === 403) {
            throw new Error("Unauthorized request")
        } else {
            throw new Error("Unknown error, please review the terminal")
        }
    }
    catch (e) {
        console.log(e)
    }
}