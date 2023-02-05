import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  timeoutErrorMessage: "Lütfen internet bağlantınızı kontrol ediniz...",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const requestHandler = async (request) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
};

export const responseHandler = async (response) => {
  return response;
};

const errorHandler = async (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
