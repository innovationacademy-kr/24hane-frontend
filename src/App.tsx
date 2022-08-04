import React, { useCallback, useEffect } from "react";
import { getIsLogin } from "api/userAPI";
import { STATUS_204_NO_CONTENT } from "utils/const/const";
import packageJson from "../package.json";
import AppRouter from "./routes/AppRouter";
import useUser from "utils/hooks/useUser";
import { useNavigate } from "react-router-dom";

export const env = process.env.REACT_APP_ENV;

const App = () => {
  const navigate = useNavigate();
  const { login, logout } = useUser();
  const initLogin = useCallback(async () => {
    try {
      const { status } = await getIsLogin();
      if (status === STATUS_204_NO_CONTENT) {
        login();
        navigate("/main");
      } else logout();
    } catch (e) {
      console.log(e);
      logout();
    }
  }, [login, logout, navigate]);

  useEffect(() => {
    initLogin();
  }, [initLogin]);

  const { version } = packageJson;
  return (
    <>
      <title>24hoursnotenough</title>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
      />
      <main className='wrapper'>
        <AppRouter />
        <footer className='footer'>{`${env === "development" ? env : ""} v${version}`}</footer>
      </main>
    </>
  );
};

export default App;
