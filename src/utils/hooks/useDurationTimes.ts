import { useAppSelector } from "app/features/hooks";
import { setMonthDurationTime, setTodayDurationTime } from "app/features/user/durationTimes";
import { useDispatch } from "react-redux";

const useAccumationTimes = () => {
  const dispath = useDispatch();
  const durationTimes = useAppSelector((state) => state.durationTimes);

  const handleSetTodayDurationTime = (param: number) => {
    dispath(setTodayDurationTime(param));
  };

  const handleSetMonthDurationTime = (param: number) => {
    dispath(setMonthDurationTime(param));
  };

  return {
    durationTimes,
    setTodayDurationTime: handleSetTodayDurationTime,
    setMonthDurationTime: handleSetMonthDurationTime,
  };
};

export default useAccumationTimes;
