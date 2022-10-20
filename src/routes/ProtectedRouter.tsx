import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { STATUS_204_NO_CONTENT } from "utils/const/const";
import { useIsLoginQuery } from "utils/hooks/queries/useIsLoginQuery";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {
    data,
    queryInfo: { isSuccess },
  } = useIsLoginQuery();

  if (isSuccess && data?.status === STATUS_204_NO_CONTENT) return children;
  else return <Navigate to='/' />;
};
