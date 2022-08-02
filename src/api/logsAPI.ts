import { instance, makeAPIPath } from "./baseAPI";

export type LogsResponse = {
  login: string;
  profileImage: string;
  inOutLogs: InOutLog[];
};

export type InOutLog = {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
};

export const getLogsDay = (year: number, month: number, day: number) => {
  return instance.get<never, LogsResponse>(
    makeAPIPath(`tag-log/perday?year=${year}&month=${month}&day=${day}`),
  );
};

export const getLogsmonth = (year: number, month: number) => {
  return instance.get<never, LogsResponse>(
    makeAPIPath(`tag-log/permonth?year=${year}&month=${month}`),
  );
};
