import axios from "axios";


const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }
  return config;
});



export default service
