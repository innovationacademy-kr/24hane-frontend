import React from "react";
import classes from "styles/components/Circle.module.css";

type CircleProps = {
  color?: string | "green" | "orange" | "red";
};
function Circle({ color = "green" }: CircleProps) {
  return <div role='status' className={`${classes.circle} ${classes[color]}`} />;
}

export default Circle;
