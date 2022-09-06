import React, { ReactElement } from "react";

import AppRouter from "./routes/AppRouter";

import Footer from "components/Footer";
import { sentryInit } from "utils/Sentry";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const env = process.env.REACT_APP_ENV;

const mainInfoClient = new QueryClient();
const timeLogClient = new QueryClient();

type QueryProvidersProps = { children: ReactElement };

const QueryProviders = ({ children }: QueryProvidersProps) => {
  return (
    <QueryClientProvider client={timeLogClient}>
      <QueryClientProvider client={mainInfoClient}>{children}</QueryClientProvider>
    </QueryClientProvider>
  );
};

const App = () => {
  if (env !== "local") sentryInit();
  return (
    <QueryProviders>
      <main className='wrapper'>
        <AppRouter />
        <Footer />
      </main>
    </QueryProviders>
  );
};

export default App;
