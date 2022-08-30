import React, { useCallback, useEffect } from "react";

import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import useUser from "utils/hooks/useUser";
import useDurataionTimes from "utils/hooks/useDurationTimes";
import { getAccumulationTimes, getUserInfo } from "api/userAPI";
import { errorUtils } from "utils/error";

const Main = () => {
  const {
    user: { isLogin },
    userInit,
  } = useUser();

  const { setMonthDurationTime, setTodayDurationTime } = useDurataionTimes();
  const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    try {
      const [useInfoResponse, accumulationTimesResponse] = await Promise.all([
        getUserInfo(),
        getAccumulationTimes(),
      ]);
      const { login: loginID, profileImage, isAdmin, inoutState } = useInfoResponse.data;
      userInit({ loginID, profileImage, isAdmin, inoutState });

      const { todayAccumationTime, monthAccumationTime } = accumulationTimesResponse.data;

      setTodayDurationTime(todayAccumationTime);
      setMonthDurationTime(monthAccumationTime);
    } catch (e) {
      errorUtils(e);
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
