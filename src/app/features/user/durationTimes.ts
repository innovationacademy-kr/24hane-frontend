import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userDurationsType } from "types/User";

type dutaionTimesState = userDurationsType;

const initialState: dutaionTimesState = {
  todayDurationTime: 0,
  monthDurationTime: 0,
};
export const durataionTimesSlice = createSlice({
  name: "durationTimes",
  initialState,
  reducers: {
    setTodayDurationTime: (state, payload: PayloadAction<number>) => {
      state.todayDurationTime = payload.payload;
    },
    setMonthDurationTime: (state, payload: PayloadAction<number>) => {
      state.monthDurationTime = payload.payload;
    },
  },
});

export const { setTodayDurationTime, setMonthDurationTime } = durataionTimesSlice.actions;
export default durataionTimesSlice.reducer;
