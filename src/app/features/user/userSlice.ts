import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "types/User";

type userState = userType;

const initialState: userState = {
  login: "",
  profile: "",
  isLogin: false,
  isAdmin: true,
  inoutState: "OUT",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, payload: PayloadAction<boolean>) => {
      state.isLogin = payload.payload;
    },

    setInit: (state, payload: PayloadAction<Omit<userState, "isLogin">>) => {
      const { profile, isAdmin, inoutState, login } = payload.payload;
      state.profile = profile;
      state.isAdmin = isAdmin;
      state.inoutState = inoutState;
      state.login = login;
    },
  },
});

export const { setIsLogin, setInit } = userSlice.actions;
export default userSlice.reducer;
