import React from "react";
import styles from "styles/components/Card/LoadingCard.module.css";
import Spinner from "components/common/Spinner";

const LoadingCard = () => {
  return (
    <div className={styles.LoadingCardCard}>
      <div className={styles.contents}>
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingCard;
