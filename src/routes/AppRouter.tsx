import React from "react";
import Layout from "components/Layout";
import NotFound from "pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRouter";
import { routes } from "./routesPath";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, authIsRequired, redirectPath, element: Element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute authIsRequired={authIsRequired} redirectPath={redirectPath}>
                <Element />
              </ProtectedRoute>
            }
          />
        ))}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
