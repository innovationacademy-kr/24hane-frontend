import React from "react";
import Admin from "pages/Admin";
import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Error from "pages/Error";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
