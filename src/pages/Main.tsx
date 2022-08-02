import React, { useCallback, useEffect } from "react";

import Card from "components/Card/Card";
import { userDurationsType } from "types/User";
import { useNavigate } from "react-router-dom";
import { getLogsDay } from "api/logsAPI";
import { getToday } from "utils/time";
import useUser from "utils/hooks/useUser";
import useDurataionTimes from "utils/hooks/useDurationTImes";

const durationaTimes: userDurationsType = {
  todayDurationTime: 2000,
  monthDurationTime: 5000,
};

const Main = () => {
  const {
    user: { isLogin },
    setLoginID,
    setProfileImage,
  } = useUser();

  const { setMonthDurationTime, setTodayDurationTime } = useDurataionTimes();
  const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    try {
      //TODO: main API로 변경
      const { year, month, day } = getToday();
      const { login: loginID, profileImage } = await getLogsDay(year, month, day);

      setLoginID(loginID);
      setProfileImage(profileImage);

      setTodayDurationTime(durationaTimes.todayDurationTime);
      setMonthDurationTime(durationaTimes.monthDurationTime);
    } catch (e) {
      console.log(e);
    }
  }, [setLoginID, setMonthDurationTime, setProfileImage, setTodayDurationTime]);

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
