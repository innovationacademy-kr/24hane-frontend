import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const sentryInit = () => {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    normalizeDepth: 6,
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
  });
};

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
