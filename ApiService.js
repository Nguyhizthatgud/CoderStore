import axios from "axios";
import { BASE_URL } from "./src/config";

const ApiService = axios.create({
    baseURL: BASE_URL
});
ApiService.interceptors.request.use(
    (request) => {

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);
ApiService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default ApiService;