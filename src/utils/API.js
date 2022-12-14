import axios from "axios";

axios.defaults.proxy = true
axios.defaults.baseURL = 'https://x4k0x13s2g.execute-api.us-east-1.amazonaws.com/dev'

export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    }

}