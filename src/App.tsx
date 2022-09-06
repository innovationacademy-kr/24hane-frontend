import React, { ReactElement } from "react";

import AppRouter from "./routes/AppRouter";

import Footer from "components/Footer";
import { sentryInit } from "utils/Sentry";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const env = process.env.REACT_APP_ENV;

const queryClient = new QueryClient();

const App = () => {
  if (env !== "local") sentryInit();
  return (
    <QueryClientProvider client={queryClient}>
      <main className='wrapper'>
        <AppRouter />
        <Footer />
      </main>
    </QueryClientProvider>
  );
};

export default App;
