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
    setIsLogin: (state, payload: PayloadAction<boolean>) => {
      state.isLogin = payload.payload;
    },

    setInit: (state, payload: PayloadAction<Omit<userState, "isLogin">>) => {
      const { profileImage, isAdmin, inoutState, login } = payload.payload;
      state.profileImage = profileImage;
      state.isAdmin = isAdmin;
      state.inoutState = inoutState;
      state.login = login;
    },
  },
});

export const { setIsLogin, setInit } = userSlice.actions;
export default userSlice.reducer;
