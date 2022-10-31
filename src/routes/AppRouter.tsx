import React from "react";
import Admin from "pages/Admin";
import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Error from "pages/Error";
import { ProtectedRoute } from "./ProtectedRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute authIsRequired={false} redirectPath='/main'>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/main'
          element={
            <ProtectedRoute authIsRequired={true} redirectPath='/'>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <ProtectedRoute authIsRequired={true} redirectPath='/'>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
