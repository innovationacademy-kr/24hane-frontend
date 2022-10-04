import React from "react";
import classes from "styles/components/Circle.module.css";

type CircleProps = {
  color?: string | "green" | "orange" | "red" | "lightgray";
};

type InoutStateObj = {
  [key: string]: string;
};

const inoutState: InoutStateObj = {
  green: "in",
  lightgray: "out",
};

function Circle({ color = "green" }: CircleProps) {
  return (
    <div
      title={inoutState[color]}
      role='status'
      className={`${classes.circle} ${classes[color]}`}
    />
  );
}

export default Circle;
