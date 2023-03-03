import { instance } from "@/api/baseAPI";

const reissueURL = "v2/reissue";
export const getReissue = async () => {
  const response = await instance.get(reissueURL);
  return response;
};

const setReissueRequestURL = "v2/reissue/request";
export const setReissueRequest = async () => {
  const response = await instance.post(setReissueRequestURL);
  return response;
};

const setReissueFinishURL = "v2/reissue/finish";
export const setReissueFinish = async () => {
  const response = await instance.patch(setReissueFinishURL);
  return response;
};
