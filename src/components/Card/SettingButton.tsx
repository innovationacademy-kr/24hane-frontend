import React, { useEffect } from "react";
import Icon from "components/common/Icon";
import { useNavigate } from "react-router-dom";
import classes from "styles/components/Card/ProfileCard.module.css";

const SttingButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/admin");
  };

  useEffect(() => {}, [navigate]);
  return <Icon name='settings' classname={classes.settingButton} handleOnclick={onClick} />;
};

export default SttingButton;
