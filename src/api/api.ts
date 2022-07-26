import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const getIsLogin = () => {
  return instance.get("/user/login/isLogin");
};
