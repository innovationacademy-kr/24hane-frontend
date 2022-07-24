import React, { useCallback, useState } from "react";
import ProfileCard from "components/Card/ProfileCard";
import TimeLogCard from "components/Card/TimeLogCard";
import classes from "styles/pages/Main.module.css";

const logs = [
  {
    id: 1,
    checkinAt: "2020-07-10T13:00:00",
    checkoutAt: "2020-07-10T18:00:00",
    durationTime: 3600,
  },
  {
    id: 2,
    checkinAt: "2020-07-11T13:00:00",
    checkoutAt: "2020-07-11T18:00:00",
    durationTime: 10860,
  },
];

const Card = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsCardFlipped(!isCardFlipped);
  }, [isCardFlipped]);

  return (
    <div className={classes.card}>
      <div
        className={`${classes["card-wrapper"]} ${!isCardFlipped ? classes.front : classes.back}`}
      >
        <ProfileCard handleFlip={handleFlip} />
        <TimeLogCard handleFlip={handleFlip} logs={logs} />
      </div>
    </div>
  );
};

export default Card;
