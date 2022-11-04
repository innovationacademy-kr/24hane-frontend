import React from "react";
import Circle from "components/common/Circle";
import { UserInfoType } from "types/User";
import { userIsIn } from "utils/user";
import classes from "styles/components/Card/ProfileCard.module.css";
import logo from "assets/42-logo-black.png";

type UserCircleProps = {
  state: string;
};

function UserCircle({ state }: UserCircleProps) {
  const color = userIsIn(state) ? "green" : "lightgray";
  return <Circle color={color} />;
}

type ProfileProps = Pick<UserInfoType, "profileImage" | "loginID" | "inoutState">;

function Profile({ profileImage, loginID: userId, inoutState: state }: ProfileProps) {
  return (
    <>
      <img className={classes.logo} alt='logo' src={logo} />
      <div className={classes["profile-wrapper"]}>
        <UserCircle state={state} />
        <img className={classes.profile} src={profileImage} alt='profile' />
        <h2 className={classes.userId}>{userId}</h2>
      </div>
    </>
  );
}

export default React.memo(Profile);
