import React from "react";

type SettingIconProps = {
  handleOnclick?: () => void;
  classname?: string;
};

const SettingIcon = ({ handleOnclick, classname, ...rest }: SettingIconProps) => {
  return (
    <span {...rest} onClick={handleOnclick} className={`material-symbols-outlined ${classname}`}>
      settings
    </span>
  );
};

export default SettingIcon;
