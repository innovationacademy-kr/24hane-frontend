import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getUserInfo } from "api/userAPI";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { UserInfoResponse, UserInfoType } from "types/User";
import { decodeUserData } from "utils/decode";

export const useMainQuery = (options?: UseQueryOptions) => {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    loginID: "user",
    isAdmin: false,
    profileImage: "",
    inoutState: "OUT",
  });

  const { data, ...queryInfo } = useQuery(["mainInfo"], getUserInfo, {
    select: (data: AxiosResponse<UserInfoResponse>) => decodeUserData(data.data),
    onSuccess: (data) => {
      setUserInfo(data);
    },
  });

  return { userInfo, setUserInfo, queryInfo };
};
