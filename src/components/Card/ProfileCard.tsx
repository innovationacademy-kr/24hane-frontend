// import ListIcon from "@mui/icons-material/List";
import React from "react";
import CardContents from "components/Card/CardContents";
import classes from "styles/components/Card/ProfileCard.module.css";
import logo from "assets/42-logo-black.png";
import Circle from "components/common/Circle";
import MenuIcon from "components/common/MenuIcon";

type UserCircleProps = {
  state: string | null;
};
function UserCircle({ state }: UserCircleProps) {
  const color = state === "checkOut" ? "green" : "orange";
  return <Circle color={color} />;
}

type ProfileProps = {
  profile: string;
  userId: string;
  state: string | null;
};

function Profile({ profile, userId, state }: ProfileProps) {
  return (
    <div className={classes["profile-wrapper"]}>
      <UserCircle state={state} />
      <img className={classes.profile} src={profile} alt='profile' />
      <h2 className={classes.userId}>{userId}</h2>
    </div>
  );
}

function ProfileCard({ handleFlip }: any) {
  // const {
  //   user: { id: userId, profile, state },
  // } = useUser();

  const [profile, userId, state] = ["minjupar", "minjupar", "in"];
  return (
    <div className={classes.profileCard}>
      <MenuIcon classname={classes.menuIcon} handleOnclick={handleFlip} />
      <img className={classes.logo} alt='logo' src={logo} />
      <Profile profile={profile} userId={userId} state={state} />
      <CardContents />
    </div>
  );
}

export default ProfileCard;
