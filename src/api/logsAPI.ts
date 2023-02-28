import { instance } from "./baseAPI";

const getLogsDayURL = "v1/tag-log/perday";
export const getLogsDate = async (year: number, month: number, day: number) => {
  const response = await instance.get(getLogsDayURL, {
    params: {
      year,
      month,
      day,
    },
  });
  return response;
};

const getLogsMonthURL = "v1/tag-log/permonth";
export const getLogsmonth = async (year: number, month: number) => {
  const response = await instance.get(getLogsMonthURL, {
    params: {
      year,
      month,
    },
  });
  return response;
};
