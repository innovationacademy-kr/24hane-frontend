export type UserInfoType = {
  loginID: string;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
};

export type userDurationsType = {
  todayDurationTime: number;
  monthDurationTime: number;
};

export type UserInfoResponse = {
  login: string;
  profileImage: string;
  isAdmin: boolean;
  gaepo?: number;
  seocho?: number;
  inoutState: "IN" | "OUT";
};
