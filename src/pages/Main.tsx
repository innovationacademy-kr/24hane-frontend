import React, { useCallback, useEffect } from "react";

import Card from "components/Card/Card";
import { useDispatch } from "react-redux";
import { setLogin, setProfileImage } from "app/features/user/userSlice";
import { userDurationsType } from "types/User";
import { setMonthDurationTime, setTodayDurationTime } from "app/features/user/durationTimes";
import { useAppSelector } from "app/features/hooks";
import { useNavigate } from "react-router-dom";
import { getLogsDay, getLogsmonth } from "api/logsAPI";
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
      const { year, month, day } = getToday();
      const [{ login, profileImage }, { inoutLogs: monthInOutLogs }] = await Promise.all([
        getLogsDay(year, month, day),
        getLogsmonth(year, month),
      ]);
      dispatch(setLogin({ login }));
      dispatch(setProfileImage({ profileImage }));

      dispatch(setTodayDurationTime(durationaTimes.todayDurationTime));
      dispatch(setMonthDurationTime(durationaTimes.monthDurationTime));
      console.log(monthInOutLogs);
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(isLogin);
    if (!isLogin) navigate("/");
  });

  useEffect(() => {
    //TODO :user데이터 가져와서 저장하는 로직 추가
    //TODO :오늘, 내일 누적시간 가져오는 로직 추가
    //TODO :개포, 서초 인원 가져오는 로직 추가
    getUserData();
  }, [getUserData]);

  return (
    <>
      {/* <ClusterStatusBoard /> */}
      <Card />
    </>
  );
};
export default Main;
