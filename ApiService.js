import axios from "axios";
import { BASE_URL } from "./src/config";

const ApiService = axios.create({
    baseURL: BASE_URL
});
ApiService.interceptors.request.use(
    (request) => {
        console.log("Starting Request:", request);
        return request;
    },
    (error) => {
        console.log("Request Error:", error);
        return Promise.reject(error);
    }
);
ApiService.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        return response;
    },
    (error) => {
        console.log("Response Error:", error);
        return Promise.reject(error);
    }
);
export default ApiService;