import { useQuery } from "@tanstack/react-query";
import { getIsLogin } from "api/userAPI";

export const useIsLoginQuery = () => {
  const { data, ...queryInfo } = useQuery(["isLogin"], getIsLogin, {});

  return { data, queryInfo };
};
