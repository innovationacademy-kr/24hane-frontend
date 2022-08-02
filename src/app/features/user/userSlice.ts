import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "types/User";

type userState = userType;

const initialState: userState = {
  login: "",
  profileImage: "",
  isLogin: false,
  isAdmin: false,
  inoutState: "OUT",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInit: (state, payload: PayloadAction<Omit<userState, "isLogin">>) => {
      const { profileImage, isAdmin, inoutState, login } = payload.payload;
      state.profileImage = profileImage;
      state.isAdmin = isAdmin;
      state.inoutState = inoutState;
      state.login = login;
    },
    setLogin: (state, payload: PayloadAction<Pick<userState, "login">>) => {
      state.login = payload.payload.login;
    },
    setProfileImage: (state, payload: PayloadAction<Pick<userState, "profileImage">>) => {
      state.profileImage = payload.payload.profileImage;
    },
    setIsLogin: (state, payload: PayloadAction<Pick<userState, "isLogin">>) => {
      state.isLogin = payload.payload.isLogin;
    },
    setIsAdmin: (state, payload: PayloadAction<Pick<userState, "isAdmin">>) => {
      state.isAdmin = payload.payload.isAdmin;
    },
    setInoutState: (state, payload: PayloadAction<Pick<userState, "inoutState">>) => {
      state.inoutState = payload.payload.inoutState;
    },
  },
});

export const { setInit, setLogin, setProfileImage, setIsLogin, setIsAdmin, setInoutState } =
  userSlice.actions;
export default userSlice.reducer;
