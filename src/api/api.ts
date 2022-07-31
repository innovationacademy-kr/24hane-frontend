import axios, { AxiosError, AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const getIsLogin = () => {
  return instance.get("/user/login/isLogin");
};
