import React, { useCallback, useEffect } from "react";

import Card from "components/Card/Card";
import { useDispatch } from "react-redux";
import { setLogin, setProfileImage } from "app/features/user/userSlice";
import { userDurationsType } from "types/User";
import { setMonthDurationTime, setTodayDurationTime } from "app/features/user/durationTimes";
import { useAppSelector } from "app/features/hooks";
import { useNavigate } from "react-router-dom";
import { getLogsDay } from "api/logsAPI";
import { getToday } from "utils/time";

const durationaTimes: userDurationsType = {
  todayDurationTime: 2000,
  monthDurationTime: 5000,
};

const Main = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = useCallback(async () => {
    try {
      //TODO: main API로 변경
      const { year, month, day } = getToday();
      const { login, profileImage } = await getLogsDay(year, month, day);

      dispatch(setLogin(login));
      dispatch(setProfileImage(profileImage));

      dispatch(setTodayDurationTime(durationaTimes.todayDurationTime));
      dispatch(setMonthDurationTime(durationaTimes.monthDurationTime));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(isLogin);
    if (isLogin) getUserData();
    else navigate("/");
  }, [getUserData, isLogin, navigate]);

  return (
    <>
      {/* <ClusterStatusBoard /> */}
      <Card />
    </>
  );
};
export default Main;
