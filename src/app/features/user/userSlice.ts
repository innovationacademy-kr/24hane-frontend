import { createSlice } from "@reduxjs/toolkit";

type userState = {
  isLogin: boolean;
};

const initialState: userState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state) => {
      state.isLogin = true;
    },
  },
});

export const { setIsLogin } = userSlice.actions;
export default userSlice.reducer;
