import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const {user} = useContext(AuthContext)
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`
})

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }
  return config;
});

// const getProfileService = () => {
//   return service.get("/")
// }

const editProfileService = (userUpdate) => {
  return service.patch(`perfil/editar/${user._id}`, userUpdate)
}

const uploadService = (uploadForm) => {
  return service.post("/uploader", uploadForm)
}

export {
  // getProfileService,
  editProfileService,
  uploadService
}