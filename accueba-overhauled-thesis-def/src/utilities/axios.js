import axios from "axios";

const baseURL = "http://localhost:3030";

export const axiosGet = axios.create({
  baseURL,
});

const config = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default config;
