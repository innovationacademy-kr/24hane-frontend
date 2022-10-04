export type UserInfoType = {
  loginID: string;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
  tagAt?: null | string;
};

export type userDurationsType = {
  todayDurationTime: number;
  monthDurationTime: number;
};

export type UserInfoResponse = {
  login: UserInfoType["loginID"];
  profileImage: UserInfoType["profileImage"];
  isAdmin: UserInfoType["isAdmin"];
  inoutState: UserInfoType["inoutState"];
  tagAt: UserInfoType["tagAt"];
  gaepo?: number;
  seocho?: number;
};
