import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        // "API-KEY": "34703736-4385-4a40-886f-8a50a0865c2b"
    }
}

export const instance = axios.create ({
    baseURL: '',
    ...settings
})