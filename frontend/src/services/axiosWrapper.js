import axios from "axios";
import { useAuthStore } from "../stores/auth";

const backend_api = import.meta.env.VITE_BACKEND_API;

const axiosInstance = axios.create({
  baseURL: backend_api,
});

axiosInstance.interceptors.request.use((request) => {
  const isLogged = useAuthStore().isLogged();
  if (isLogged) {
    request.headers.Authorization = "Bearer " + useAuthStore().user.token;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    } else {
      if (error.response.status == 401) {
        useAuthStore().logout();
      } else {
        // Erreur de l'API
        return Promise.reject(error);
      }
    }
  }
);

export default axiosInstance;
