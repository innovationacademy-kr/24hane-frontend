import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "types/User";

type userState = userType;

const initialState: userState = {
  login: "",
  profileImage: "",
  isLogin: undefined,
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
    setLogin: (state, payload: PayloadAction<string>) => {
      state.login = payload.payload;
    },
    setProfileImage: (state, payload: PayloadAction<string>) => {
      state.profileImage = payload.payload;
    },
    setIsLogin: (state, payload: PayloadAction<boolean>) => {
      state.isLogin = payload.payload;
    },
    setIsAdmin: (state, payload: PayloadAction<boolean>) => {
      state.isAdmin = payload.payload;
    },
    setInoutState: (state, payload: PayloadAction<Pick<userState, "inoutState">>) => {
      state.inoutState = payload.payload.inoutState;
    },
  },
});

export const { setInit, setLogin, setProfileImage, setIsLogin, setIsAdmin, setInoutState } =
  userSlice.actions;
export default userSlice.reducer;
