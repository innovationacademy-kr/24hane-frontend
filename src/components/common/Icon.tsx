import React from "react";

type IconProps = {
  name: string;
  handleOnclick?: () => void;
  classname?: string;
};

function Icon({ name, handleOnclick, classname, ...rest }: IconProps) {
  return (
    <span
      {...rest}
      className={`material-symbols-outlined icon ${classname} `}
      onClick={handleOnclick}
    >
      {name}
    </span>
  );
}

export default Icon;
