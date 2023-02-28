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
    // error 가 401 이 아닐 수 있다.(예를 들어 토큰에 한글을 넣을 경우, 다른 에러가 뜬다.)
    if (
      error.response?.status === STATUS_401_UNAUTHORIZED ||
      error.response?.status === undefined
    ) {
      localStorage.removeItem("isLogin");
      removeCookie();
      clearStorage();
      window.location.href = "/";
      if (!isAlert) {
        alert(
          "API 실패: 로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요."
        );
        isAlert = true;
      }
    }
    return Promise.reject(error);
  }
);
