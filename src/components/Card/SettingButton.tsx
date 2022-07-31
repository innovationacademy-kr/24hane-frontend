import SettingIcon from "components/common/SettingIcon";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "styles/components/Card/ProfileCard.module.css";
const SttingButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/admin");
  };

  useEffect(() => {}, [navigate]);
  return <SettingIcon classname={classes.settingButton} handleOnclick={onClick} />;
};

export default SttingButton;
