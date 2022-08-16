import * as Sentry from "@sentry/react";
import axios, { AxiosError } from "axios";

const handleAxiosError = (error: AxiosError) => {
  const { method, url, params, data: requestData, headers } = error.config;
  Sentry.setContext("API Request Detail", {
    method,
    url,
    params,
    requestData,
    headers,
  });

  if (error.response) {
    const { data, status } = error.response;
    Sentry.setContext("API Response Detail", {
      status,
      data,
    });
  }
};

const handleSentryError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  }
  Sentry.captureException(error);
};

export const errorUtils = (error: unknown) => {
  handleSentryError(error);

  console.error(error);
};
