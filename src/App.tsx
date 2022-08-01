import { getIsLogin } from "api/api";
import { setIsLogin } from "app/features/user/userSlice";
import React, { useCallback, useEffect } from "react";
import packageJson from "../package.json";
import AppRouter from "./routes/AppRouter";

export const env = process.env.REACT_APP_ENV;

const App = () => {
  const init = useCallback(async () => {
    try {
      const data = await getIsLogin();
      if (data.status === 200) dispatch(setIsLogin(true));
      else dispatch(setIsLogin(false));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
