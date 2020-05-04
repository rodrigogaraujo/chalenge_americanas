import axios from "axios";

const api = axios.create({
    baseURL: "https://americanas-backend.herokuapp.com",
});

export default api;
