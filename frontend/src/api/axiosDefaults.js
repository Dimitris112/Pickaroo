import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; // images and more
axios.defaults.withCredentials = true; // required for cookies

export const axiosReq = axios.create(); // requests
export const axiosRes = axios.create(); // responses
