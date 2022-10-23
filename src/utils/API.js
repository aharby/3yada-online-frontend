import axios from "axios";

axios.defaults.proxy = true
axios.defaults.baseURL = 'http://localhost:3001'

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