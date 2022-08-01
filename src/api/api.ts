import axios, { AxiosResponse } from "axios";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response: AxiosResponse) => response.data);

export const getIsLogin = () => {
  return instance.get("user/login/isLogin");
};
