export type userType = {
  login: string;
  isLogin: boolean;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
};

export type userDurationsType = {
  todayDurationTime: number;
  monthDurationTime: number;
};
