import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Sentry.ErrorBoundary fallback={<p>에러가 발생 했습니다.</p>}> */}
    <App />
    {/* </Sentry.ErrorBoundary> */}
  </React.StrictMode>,
);
