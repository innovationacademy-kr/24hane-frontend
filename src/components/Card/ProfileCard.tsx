import React from "react";
import CardContents from "components/Card/CardContents";
import classes from "styles/components/Card/ProfileCard.module.css";
import Icon from "components/common/Icon";
import { useMainQuery } from "utils/hooks/queries/useMainQuery";
import Profile from "components/Card/Profile";

type ProfileCardProps = {
  handleFlip: () => void;
};

function ProfileCard({ handleFlip }: ProfileCardProps) {
  const {
    userInfo: { profileImage, loginID, inoutState, tagAt },
  } = useMainQuery();

  return (
    <div className={classes.profileCard}>
      <Icon name='menu' classname={classes.menuIcon} handleOnclick={handleFlip} />
      <Profile profileImage={profileImage} loginID={loginID} inoutState={inoutState} />
      <CardContents inoutState={inoutState} tagAt={tagAt} />
    </div>
  );
}

export default ProfileCard;
