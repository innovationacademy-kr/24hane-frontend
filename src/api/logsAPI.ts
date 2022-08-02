import { instance, makeAPIPath } from "./baseAPI";

export type LogsResponse = {
  login: string;
  profileImage: string;
  inoutLogs: InoutLog[];
};

export type InoutLog = {
  inTimeStamp: number;
  outTImeStamp: number;
  durationSecond: number;
};

export const getLogsDay = (year: number, month: number, day: number) => {
  return instance.get<never, LogsResponse>(
    makeAPIPath(`tag-log/perday?year=${year}&month=${month}&day=${day}`),
  );
};

export const getLogsmonth = (year: number, month: number) => {
  return instance.get<never, LogsResponse>(
    makeAPIPath(`tag-log/perday?year=${year}&month=${month}`),
  );
};
