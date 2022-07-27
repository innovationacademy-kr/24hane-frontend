import React, { useEffect } from "react";

import Card from "components/Card/Card";
import { useDispatch } from "react-redux";
import { setInit } from "app/features/user/userSlice";
import { userDurationsType, userType } from "types/User";
import { setMonthDurationTime, setTodayDurationTime } from "app/features/user/durationTimes";

const data: userType = {
  login: "minjupar",
  profile: "https://cdn.intra.42.fr/users/minjupar.jpg",
  isLogin: true,
  isAdmin: false,
  inoutState: "OUT",
};

const durationaTimes: userDurationsType = {
  todayDurationTime: 2000,
  monthDurationTime: 5000,
};

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //TODO :user데이터 가져와서 저장하는 로직 추가
    //TODO :오늘,내일 누적시간 가져오는 로직

    const initData = {
      login: data.login,
      profile: data.profile,
      isAdmin: data.isAdmin,
      inoutState: data.inoutState,
    };

    dispatch(setTodayDurationTime(durationaTimes.todayDurationTime));
    dispatch(setMonthDurationTime(durationaTimes.monthDurationTime));

    dispatch(setInit(initData));
  }, [dispatch]);

  return (
    <>
      {/* <ClusterStatusBoard /> */}
      <Card />
    </>
  );
};
export default Main;
