import axios, { AxiosResponse } from "axios";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.status === 401) window.location.href = "/";
  else return response;
});
