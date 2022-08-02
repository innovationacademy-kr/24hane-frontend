import React, { useCallback, useEffect } from "react";
import { getIsLogin } from "api/userAPI";
import { setIsLogin } from "app/features/user/userSlice";
import { useDispatch } from "react-redux";
import { STATUS_204_NO_CONTENT } from "utils/const/const";
import packageJson from "../package.json";
import AppRouter from "./routes/AppRouter";

export const env = process.env.REACT_APP_ENV;

const App = () => {
  const dispatch = useDispatch();
  const initLogin = useCallback(async () => {
    try {
      const { status } = await getIsLogin();
      if (status === STATUS_204_NO_CONTENT) dispatch(setIsLogin(true));
      else dispatch(setIsLogin(false));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

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
