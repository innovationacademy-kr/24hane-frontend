import React from "react";
import useTimer from "utils/hooks/useTimer";

type DurationProps = {
  startTime: number;
};

function DurationTime({ startTime }: DurationProps) {
  const durationTime = useTimer(startTime);
  return (
    <strong>
      {Math.floor(durationTime / 3600)} : {Math.floor(durationTime / 60) % 60} :
      {Math.floor(durationTime % 60)}
    </strong>
  );
}

export default DurationTime;
