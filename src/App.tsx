import React from "react";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
      />
      <main className='wrapper'>
        <AppRouter />
        <footer className='footer'>v3.0.0</footer>
      </main>
    </>
  );
};

export default App;
