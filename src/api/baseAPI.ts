import axios, { AxiosResponse } from "axios";
import { STATUS_401_UNAUTHORIZED } from "utils/const/const";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.status === STATUS_401_UNAUTHORIZED)
    window.history.pushState({ name: "not login" }, "redirect home", "/");
  else return response;
});
