import React from "react";
import CardContents from "components/Card/CardContents";
import classes from "styles/components/Card/ProfileCard.module.css";
import logo from "assets/42-logo-black.png";
import Circle from "components/common/Circle";
import MenuIcon from "components/common/MenuIcon";
import { useAppSelector } from "app/features/hooks";
import { userDurationsType, userType } from "types/User";

type UserCircleProps = {
  state: string | null;
};
function UserCircle({ state }: UserCircleProps) {
  const color = state?.toUpperCase() === "IN" ? "green" : "lightgray";
  return <Circle color={color} />;
}

type ProfileProps = Pick<userType, "profile" | "login" | "inoutState">;

function Profile({ profile, login: userId, inoutState: state }: ProfileProps) {
  return (
    <div className={classes["profile-wrapper"]}>
      <UserCircle state={state} />
      <img className={classes.profile} src={profile} alt='profile' />
      <h2 className={classes.userId}>{userId}</h2>
    </div>
  );
}

type ProfileCardProps = {
  handleFlip: () => void;
};

function ProfileCard({ handleFlip }: ProfileCardProps) {
  const user = useAppSelector((state) => state.user);
  const { profile, login, inoutState } = user;

  return (
    <div className={classes.profileCard}>
      <MenuIcon classname={classes.menuIcon} handleOnclick={handleFlip} />
      <img className={classes.logo} alt='logo' src={logo} />
      <Profile profile={profile} login={login} inoutState={inoutState} />
      <CardContents />
      <p>입퇴실 시 카드 태깅을 꼭 해주세요!</p>
    </div>
  );
}

export default ProfileCard;
