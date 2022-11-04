import React from "react";

import AppRouter from "./routes/AppRouter";

import Footer from "components/Footer";
import { sentryInit } from "utils/Sentry";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "components/common/Loading";

export const env = process.env.REACT_APP_ENV;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const App = () => {
  if (env !== "local") sentryInit();
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Loading />}>
        <AppRouter />
        <Footer />
      </React.Suspense>
    </QueryClientProvider>
  );
};

export default App;
