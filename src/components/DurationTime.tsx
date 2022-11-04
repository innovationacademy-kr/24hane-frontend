import React from "react";

type DurationProps = {
  startTime: number;
};

const timeFomat = (time: number) => {
  return time < 10 ? `0${time}` : time;
};

function DurationTime({ startTime }: DurationProps) {
  return (
    <strong>
      {`${timeFomat(Math.floor(startTime / 3600))} : ${timeFomat(
        Math.floor(startTime / 60) % 60,
      )} :  
      ${timeFomat(Math.floor(startTime % 60))}`}
    </strong>
  );
}

export default DurationTime;
