


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


