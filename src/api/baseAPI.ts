import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { STATUS_401_UNAUTHORIZED } from "utils/const/const";
import { getAccessToken } from "utils/cookie";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getAccessToken();
    const newConfig = { ...config };
    if (newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
  },
  (error) => Promise.reject(error.response),
);

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
