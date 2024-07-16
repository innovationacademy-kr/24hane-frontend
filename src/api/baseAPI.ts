import axios from "axios";
import { getCookie, setCookie, removeCookie } from "./cookie/cookies";
import { STATUS_401_UNAUTHORIZED } from "@/constants/statusCode";
import { clearStorage } from "@/utils/localStorage";

const accessTokenName = import.meta.env.VITE_ACCESS_TOKEN;
const refreshTokenName = import.meta.env.VITE_REFRESH_TOKEN;

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie(accessTokenName);
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response)
);

let isAlert = false;
let isRefreshing = false;
let refreshSubscribers: any[] = [];

function onRrefreshed(token: string) {
  refreshSubscribers.map((callback) => callback(token));
}

function addRefreshSubscriber(callback: any) {
  refreshSubscribers.push(callback);
}

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === STATUS_401_UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token: string) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            resolve(axios(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        axios
          .post(
            `${import.meta.env.VITE_APP_API_URL}/user/login/refresh`,
            {},
            { withCredentials: true }
          )
          .then(({ data }) => {
            setCookie(accessTokenName, data.accessToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${data.accessToken}`;
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${data.accessToken}`;
            onRrefreshed(data.accessToken);
            resolve(instance(originalRequest));
          })
          .catch((err) => {
            removeCookie(accessTokenName);
            removeCookie(refreshTokenName);
            clearStorage();
            window.location.href = "/";
            if (!isAlert) {
              alert("로그인 정보가 유효하지 않습니다.\n다시 로그인해주세요.");
              isAlert = true;
            }
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
            refreshSubscribers = [];
          });
      });
    }

    return Promise.reject(error);
  }
);
