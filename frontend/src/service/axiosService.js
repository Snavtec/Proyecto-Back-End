import axios from "axios";

const baseURL = process.env.REACT_APP_ENDPOINT;

const URL = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_URL = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

AUTH_URL.interceptors.request.use(
  (config) => {
    // get access token from local storage
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete AUTH_URL.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export { URL, AUTH_URL };
