export interface UserInfo {
  login: string;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
  tagAt?: null | string;
}

export interface MainInfo extends UserInfo {
  gaepo?: number;
  seocho?: number;
}
