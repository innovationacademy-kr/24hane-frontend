import { instance, makeAPIPath } from "./api";

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

export const getLgosDay = (year: number, month: number, day: number) => {
  return instance.get(makeAPIPath(`tag-log/perday?year=${year}&month=${month}&day=${day}`));
};

export const getLgosmonth = (year: number, month: number, day: number) => {
  return instance.get<never, LogsResponse>(
    makeAPIPath(`tag-log/perday?year=${year}&month=${month}&day=${day}`),
  );
};
