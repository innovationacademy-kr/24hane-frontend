import Home from "pages/Home";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useIsLoginQuery } from "utils/hooks/queries/useIsLoginQuery";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const {
    queryInfo: { isSuccess },
  } = useIsLoginQuery();
  const navigate = useNavigate();

  if (!isSuccess) {
    alert("네트워크 오류 입니다. 다시 시도 하세요.");
    navigate("/");
  }

  if (isSuccess) return children;
  else return <Home />;
};
