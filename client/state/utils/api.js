import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
