import React from "react";
import CardContents from "components/Card/CardContents";
import classes from "styles/components/Card/ProfileCard.module.css";
import logo from "assets/42-logo-black.png";
import Circle from "components/common/Circle";
import { UserInfoType } from "types/User";
import SettingButton from "components/Card/SettingButton";
import Icon from "components/common/Icon";
import { useMainQuery } from "utils/hooks/queries/useMainQuery";

type UserCircleProps = {
  state: string | null;
};
function UserCircle({ state }: UserCircleProps) {
  const color = state?.toUpperCase() === "IN" ? "green" : "lightgray";
  return <Circle color={color} />;
}

type ProfileProps = Pick<UserInfoType, "profileImage" | "loginID" | "inoutState">;

function Profile({ profileImage, loginID: userId, inoutState: state }: ProfileProps) {
  return (
    <div className={classes["profile-wrapper"]}>
      <UserCircle state={state} />
      <img className={classes.profile} src={profileImage} alt='profile' />
      <h2 className={classes.userId}>{userId}</h2>
    </div>
  );
}

type ProfileCardProps = {
  handleFlip: () => void;
};

function ProfileCard({ handleFlip }: ProfileCardProps) {
  const { userInfo } = useMainQuery();

  return (
    <div className={classes.profileCard}>
      <Icon name='menu' classname={classes.menuIcon} handleOnclick={handleFlip} />
      <img className={classes.logo} alt='logo' src={logo} />
      <Profile
        profileImage={userInfo?.profileImage}
        loginID={userInfo?.loginID}
        inoutState={userInfo?.inoutState}
      />
      <CardContents />
      <div>
        <p>입퇴실 시 카드 태깅을 꼭 해주세요!</p>
        {userInfo?.isAdmin ? <SettingButton /> : null}
      </div>
    </div>
  );
}

export default ProfileCard;
