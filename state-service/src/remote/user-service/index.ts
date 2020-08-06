import axios from 'axios';

let baseURL = process.env['SWINGSTATE_USER_SERVICE_HOST'] || 'http://localhost:80/users'

export const userServiceBaseClient = axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json'
    }
})