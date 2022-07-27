import React from "react";
import classes from "styles/components/MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>42 logo</span>
      <h1 className={classes.title}>
        24hours-are-not- <br></br> enough
      </h1>
    </header>
  );
};

export default MainHeader;
