import { instance } from "@/api/baseAPI";

const isLoginURL = "user/login/isLogin";
export const getIsLogin = async () => {
  const response = await instance.get(isLoginURL);
  return response;
};

const mainInfoURL = "v1/tag-log/maininfo";
export const getMainInfo = async () => {
  const response = await instance.get(mainInfoURL);
  return response;
};

const accTimesURL = "v1/tag-log/accumulationTimes";
export const getAccTimes = async () => {
  const response = await instance.get(accTimesURL);
  return response;
};
