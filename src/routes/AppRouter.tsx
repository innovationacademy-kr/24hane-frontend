import React from "react";
import Admin from "pages/Admin";
import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Error from "pages/Error";
import { ProtectedRoute } from "./ProtectedRouts";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/main'
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
