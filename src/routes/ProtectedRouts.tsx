import { getIsLogin } from "api/userAPI";
import axios from "axios";
import { ReactElement, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  const initLogin = useCallback(async () => {
    try {
      await getIsLogin();
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

  return children;
};
