import { getIsLogin } from "api/userAPI";
import axios from "axios";
import Home from "pages/Home";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const initLogin = useCallback(async () => {
    try {
      await getIsLogin();
      setIsSuccess(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate("/");
          return;
        }
      }
    }
  }, [navigate]);

  useEffect(() => {
    initLogin();
  });

  if (isSuccess) return children;
  else return <Home />;
};
