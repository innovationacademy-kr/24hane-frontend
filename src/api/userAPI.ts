import { instance, makeAPIPath } from "api/baseAPI";

type IsLoginResponse = {
  status: number;
};

// type UserInfoResponse = {
//   login: "string";
//   profileImage: "string";
//   isAdmin: boolean;
//   gaepo?: number;
//   seocho: number;
//   inoutState: "IN" | "OUT";
// };

// type AccumulationTimesResponse = {
//   todayAccumationTime: number;
//   monthAccumationTime: number;
// };

export const getIsLogin = () => {
  return instance.get<never, IsLoginResponse>("user/login/isLogin");
};

export const getUserInfo = () => {
  return instance.get(makeAPIPath("tag-log/maininfo"));
};

export const getAccumulationTimes = () => {
  return instance.get(makeAPIPath("tag-log/accumulationTimes"));
};
