import React, { useEffect } from "react";

import Card from "components/Card/Card";
import { useDispatch } from "react-redux";
import { setInit } from "app/features/user/userSlice";
import { userDurationsType, userType } from "types/User";
import { setMonthDurationTime, setTodayDurationTime } from "app/features/user/durationTimes";
import { useAppSelector } from "app/features/hooks";
import { useNavigate } from "react-router-dom";

const data: userType = {
  login: "minjupar",
  profileImage: "https://cdn.intra.42.fr/users/minjupar.jpg",
  isLogin: true,
  isAdmin: true,
  inoutState: "OUT",
};

const durationaTimes: userDurationsType = {
  todayDurationTime: 2000,
  monthDurationTime: 5000,
};

const Main = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLogin);
    if (!isLogin) navigate("/");
  });

  useEffect(() => {
    const { login, profileImage, isAdmin, inoutState } = data;
    //TODO :user데이터 가져와서 저장하는 로직 추가
    //TODO :오늘, 내일 누적시간 가져오는 로직 추가
    //TODO :개포, 서초 인원 가져오는 로직 추가

    const initData = {
      login,
      profileImage,
      isAdmin,
      inoutState,
    };
    dispatch(setInit(initData));

    dispatch(setTodayDurationTime(durationaTimes.todayDurationTime));
    dispatch(setMonthDurationTime(durationaTimes.monthDurationTime));
  }, [dispatch]);

  return (
    <>
      {/* <ClusterStatusBoard /> */}
      <Card />
    </>
  );
};
export default Main;
