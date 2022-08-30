import React, { useCallback, useEffect } from "react";

import AppRouter from "./routes/AppRouter";

import Footer from "components/Footer";
import { sentryInit } from "utils/Sentry";
import useUser from "utils/hooks/useUser";
import { getIsLogin } from "api/userAPI";
import { STATUS_204_NO_CONTENT } from "utils/const/const";
import axios from "axios";
import { errorUtils } from "utils/error";

export const env = process.env.REACT_APP_ENV;

const App = () => {
  const { login, logout } = useUser();
  const initLogin = useCallback(async () => {
    try {
      const { status } = await getIsLogin();
      if (status === STATUS_204_NO_CONTENT) {
        login();
      } else {
        logout();
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 401) {
        logout();
        return;
      }
      errorUtils(e);
      logout();
    }
  }, [login, logout]);

  useEffect(() => {
    initLogin();
  }, [initLogin]);

  if (env !== "local") sentryInit();
  return (
    <>
      <main className='wrapper'>
        <AppRouter />
        <Footer />
      </main>
    </>
  );
};

export default App;
