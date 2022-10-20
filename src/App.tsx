import React from "react";

import AppRouter from "./routes/AppRouter";

import Footer from "components/Footer";
import { sentryInit } from "utils/Sentry";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "components/common/Loading";
import axios from "axios";

export const env = process.env.REACT_APP_ENV;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          alert(`${err.response?.status} 오류가 발생 했습니다. 다시 시도해 주세요.`);
          window.location.href = "/";
        }
      },
    },
  },
});

const App = () => {
  if (env !== "local") sentryInit();
  return (
    <QueryClientProvider client={queryClient}>
      <main className='wrapper'>
        <React.Suspense fallback={<Loading />}>
          <AppRouter />
          <Footer />
        </React.Suspense>
      </main>
    </QueryClientProvider>
  );
};

export default App;
