import Loading from "components/common/Loading";
import React, { useCallback, useState } from "react";
import styles from "styles/pages/Main.module.css";
import TimeLogCard from "./TimeLogCard";

const ProfileCard = React.lazy(() => import("components/Card/ProfileCard"));

export type CardProps = {
  handleFlip: () => void;
};

const Card = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsCardFlipped(!isCardFlipped);
  }, [isCardFlipped]);

  return (
    <div className={styles.card}>
      <div className={`${styles["cardWrapper"]} ${!isCardFlipped ? styles.front : styles.back}`}>
        <React.Suspense fallback={<Loading />}>
          <ProfileCard handleFlip={handleFlip} />
        </React.Suspense>
        <TimeLogCard handleFlip={handleFlip} />
      </div>
    </div>
  );
};

export default Card;
