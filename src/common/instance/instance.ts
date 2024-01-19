import axios from "axios";

export const settings = {
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    }
}

export const instance = axios.create ({
    baseURL: 'http://localhost:8000/',
    ...settings
})