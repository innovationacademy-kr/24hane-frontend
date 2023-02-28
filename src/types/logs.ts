export interface InOutLog {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
}

export interface LogsData {
  login: string;
  profileImage: string;
  inOutLogs: InOutLog[];
}

// 일별 로그타임 계산
export interface Log {
  inLogTime: string;
  outLogTime: string;
  accLogTime: string;
}

export interface UserAccTime {
  todayAccumationTime: number;
  monthAccumationTime: number;
}

export interface PeriodData {
  periods: string;
  total: number;
}
