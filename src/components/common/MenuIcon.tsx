import React from "react";

type MenuIconProps = {
  handleOnclick?: () => void;
  classname?: string;
};

function MenuIcon({ handleOnclick, classname, ...rest }: MenuIconProps) {
  return (
    <span {...rest} className={`material-symbols-outlined ${classname} `} onClick={handleOnclick}>
      menu
    </span>
  );
}

export default MenuIcon;
