import React, { useCallback, useState } from "react";
import ProfileCard from "components/Card/ProfileCard";
import TimeLogCard from "components/Card/TimeLogCard";
import classes from "styles/pages/Main.module.css";

export type CardProps = {
  handleFlip: () => void;
};

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
        <TimeLogCard handleFlip={handleFlip} />
      </div>
    </div>
  );
};

export default Card;
