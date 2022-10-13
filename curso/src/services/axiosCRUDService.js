import axios from 'axios';

/**
 * Login Method to ReqRes edpoint
 * @param { string } email 
 * @param { string } password 
 */

export const login = (email, password) => {

    let body = {
        email,
        password
    }
    // Returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body )

}

// TODO Obtain All Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

// TODO Obtain All paged Users
export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO Obtain User by Id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO Create User
export const createUser = (name, job) => {
    let body = {
        name,
        job
    }
    return axios.post('https://reqres.in/api/users', body)
}

// TODO Update User
export const updateUserById = (id, name, job) => {
    let body = {
        name,
        job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// TODO Delete User
export const deleteteUserById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
