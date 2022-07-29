import React from "react";
import packageJson from "../package.json";
import AppRouter from "./routes/AppRouter";

export const env = process.env.NODE_ENV;

const App = () => {
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
