import React, { useCallback, useEffect } from "react";

import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import useUser from "utils/hooks/useUser";
import useDurataionTimes from "utils/hooks/useDurationTimes";
import { getAccumulationTimes, getUserInfo } from "api/userAPI";

const Main = () => {
  const {
    user: { isLogin },
    userInit,
  } = useUser();

  const { setMonthDurationTime, setTodayDurationTime } = useDurataionTimes();
  const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    try {
      const [userInfo, accumulationTimes] = await Promise.all([
        getUserInfo(),
        getAccumulationTimes(),
      ]);
      const { login: loginID, profileImage, isAdmin, inoutState } = userInfo;
      userInit({ loginID, profileImage, isAdmin, inoutState });

      setTodayDurationTime(accumulationTimes.todayAccumationTime);
      setMonthDurationTime(accumulationTimes.monthAccumationTime);
    } catch (e) {
      console.log(e);
    }
  }, [setMonthDurationTime, setTodayDurationTime, userInit]);

  useEffect(() => {
    if (isLogin === undefined) return;
    else if (isLogin === true) getUserData();
    else if (isLogin === false) navigate("/");
  }, [getUserData, isLogin, navigate]);

  return (
    <>
      {/* <ClusterStatusBoard /> */}
      <Card />
    </>
  );
};
export default Main;
