import { UserInfoResponse, UserInfoType } from "types/User";

/**
 *
 * 벡엔드에서 받은 response값을 프론트엔드에 맞게 데이터를 가공합니다.
 * @param init 변환할 response값
 * @returns 변환된 데이터
 */

export const decodeUserData = (init: UserInfoResponse): Omit<UserInfoType, "isLogin"> => ({
  loginID: init.login,
  profileImage: init.profileImage,
  isAdmin: init.isAdmin,
  inoutState: init.inoutState,
});
