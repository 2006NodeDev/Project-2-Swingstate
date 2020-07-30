import axios from 'axios'
import { baseUrl } from '../../environment'

export const swingstateClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    //withCredentials:true
})