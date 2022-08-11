export type userType = {
  loginID: string;
  isLogin: boolean | undefined;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
};

export type userDurationsType = {
  todayDurationTime: number;
  monthDurationTime: number;
};
