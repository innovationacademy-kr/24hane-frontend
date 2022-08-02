import { instance } from "./api";

type IsLoginResponse = {
  status: number;
};

export const getIsLogin = () => {
  return instance.get<never, IsLoginResponse>("user/login/isLogin");
};
