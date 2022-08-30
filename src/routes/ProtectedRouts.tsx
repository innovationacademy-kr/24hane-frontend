import { Navigate } from "react-router-dom";
import useUser from "utils/hooks/useUser";

type ProtectedRouteProps = {
  children: any;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {
    user: { isLogin },
  } = useUser();
  if (!isLogin) return <Navigate to='/' />;
  return children;
};
