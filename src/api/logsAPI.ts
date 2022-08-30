import { instance, makeAPIPath } from "./baseAPI";

export type LogsResponse = {
  login: string; //loginID 로 변경해서 사용
  profileImage: string;
  inOutLogs: InOutLog[];
};

export type InOutLog = {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
};

export const getLogsDay = (year: number, month: number, day: number) => {
  return instance.get(makeAPIPath(`tag-log/perday?year=${year}&month=${month}&day=${day}`));
};

export const getLogsmonth = (year: number, month: number) => {
  return instance.get(makeAPIPath(`tag-log/permonth?year=${year}&month=${month}`));
};
