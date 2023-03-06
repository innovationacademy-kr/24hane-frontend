import axios from "axios";
import { getCookie, removeCookie } from "./cookie/cookies";
import { STATUS_401_UNAUTHORIZED } from "@/constants/statusCode";
import { clearStorage } from "@/utils/localStorage";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie();
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response)
);

let isAlert = false;

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response?.status === STATUS_401_UNAUTHORIZED ||
      error.response?.status === undefined
    ) {
      localStorage.removeItem("isLogin");
      removeCookie();
      clearStorage();
      window.location.href = "/";
      if (!isAlert) {
        alert("로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
        isAlert = true;
      }
    }
    return Promise.reject(error);
  }
);
