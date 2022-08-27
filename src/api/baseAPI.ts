import axios from "axios";

export const VERSION_PATH = "v1";
export const makeAPIPath = (path: string) => `${VERSION_PATH}/${path}`;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// instance.interceptors.response.use((response: AxiosResponse) => {
//   if (response.status === STATUS_200_SUCESS) return response.data;
//   else if (response.status === STATUS_204_NO_CONTENT) return { status: STATUS_204_NO_CONTENT };
//   else return response;
// });
