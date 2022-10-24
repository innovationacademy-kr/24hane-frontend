import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { STATUS_204_NO_CONTENT } from "utils/const/const";
import { useIsLoginQuery } from "utils/hooks/queries/useIsLoginQuery";

type ProtectedRouteProps = {
  children: ReactElement;
  redirectPath: string;
  authIsRequired: boolean;
};

const isLogin = (status: number = 401) => {
  return status === STATUS_204_NO_CONTENT;
};

export const ProtectedRoute = ({ redirectPath, authIsRequired, children }: ProtectedRouteProps) => {
  const {
    data,
    queryInfo: { isSuccess },
  } = useIsLoginQuery();

  console.log(data?.status);
  if (isSuccess && isLogin(data?.status) === authIsRequired) return children;
  else return <Navigate to={redirectPath} />;
};
