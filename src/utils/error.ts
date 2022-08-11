import * as Sentry from "@sentry/react";

export const errorUtils = (error: any) => {
  Sentry.setExtra("error", error);
  Sentry.captureException(error);
  console.error(error.message);
};
