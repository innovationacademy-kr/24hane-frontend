import { RootState } from "app/features/store";
import {
  setInit,
  setInoutState,
  setIsAdmin,
  setIsLogin,
  setLoginID,
  setProfileImage,
} from "app/features/user/userSlice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userType } from "types/User";

const useUser = () => {
  const dispath = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const userInit = useCallback(
    (param: Omit<userType, "isLogin">) => {
      const { loginID, profileImage, isAdmin, inoutState } = param;
      dispath(setInit({ loginID, profileImage, isAdmin, inoutState }));
    },
    [dispath],
  );

  const login = useCallback(() => {
    dispath(setIsLogin(true));
    // navigate("/main");
  }, [dispath]);

  const logout = useCallback(() => {
    dispath(setIsLogin(false));
    // navigate("/", { replace: true });
  }, [dispath]);

  const handleProfileImage = useCallback(
    (param: string) => {
      dispath(setProfileImage(param));
    },
    [dispath],
  );

  const handleLoginID = useCallback(
    (param: string) => {
      dispath(setLoginID(param));
    },
    [dispath],
  );

  const handleIsAdmin = useCallback(
    (param: boolean) => {
      dispath(setIsAdmin(param));
    },
    [dispath],
  );

  const handleInoutState = useCallback(
    (param: Pick<userType, "inoutState">) => {
      dispath(setInoutState(param));
    },
    [dispath],
  );

  return {
    user,
    login,
    logout,
    userInit,
    setInoutState: handleInoutState,
    setIsAdmin: handleIsAdmin,
    setLoginID: handleLoginID,
    setProfileImage: handleProfileImage,
  };
};

export default useUser;
