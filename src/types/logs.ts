export interface InOutLog {
  inTimeStamp: number | null;
  outTimeStamp: number | null;
  durationSecond: number;
}

export interface LogsData {
  login: string;
  profileImage: string;
  inOutLogs: InOutLog[];
  acceptedAccumulationTime: number;
  totalAccumulationTime: number;
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
  total: string;
}
