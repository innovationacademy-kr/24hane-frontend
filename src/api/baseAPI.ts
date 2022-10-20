import axios, { AxiosError, AxiosResponse } from "axios";
import { STATUS_401_UNAUTHORIZED } from "utils/const/const";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === STATUS_401_UNAUTHORIZED)
      return Promise.resolve({
        status: 401,
        message: "로그인이 필요합니다.",
      });
    else return Promise.reject(error);
  },
);
