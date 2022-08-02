import axios, { AxiosResponse } from "axios";
import { IS_LOGIN_STATUS } from "utils/const/const";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response: AxiosResponse) => {
  console.log(response);
  if (response.status === IS_LOGIN_STATUS) return { status: IS_LOGIN_STATUS };
  else return response.data;
});
