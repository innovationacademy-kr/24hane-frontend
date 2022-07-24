import React from "react";
import classes from "styles/components/Button.module.css";

type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

function Button({ color = "green", text, type, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${classes.button} ${classes[`${color}`]}`}
      color={color}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
