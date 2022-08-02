import axios, { AxiosResponse } from "axios";
import { STATUS_204_NO_CONTENT } from "utils/const/const";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response: AxiosResponse) => {
  console.log(response);
  if (response.status === STATUS_204_NO_CONTENT) return { status: STATUS_204_NO_CONTENT };
  else return response.data;
});
