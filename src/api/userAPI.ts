import { instance, makeAPIPath } from "api/baseAPI";
import { UserInfoResponse } from "types/User";

export const getIsLogin = () => {
  return instance.get("user/login/isLogin");
};

export const getUserInfo = () => {
  return instance.get<UserInfoResponse>(makeAPIPath("tag-log/maininfo"));
};

export const getAccumulationTimes = () => {
  return instance.get(makeAPIPath("tag-log/accumulationTimes"));
};
