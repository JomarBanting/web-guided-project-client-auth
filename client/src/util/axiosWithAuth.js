import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseUrl: "http://localhost:5001/api",
        headers: { authorization: token }
    })
}