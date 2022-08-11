import { configureStore } from "@reduxjs/toolkit";
import userReducer from "app/features/user/userSlice";
import durataionTimesReducer from "./user/durationTimes";
export const store = configureStore({
  reducer: { user: userReducer, durationTimes: durataionTimesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
