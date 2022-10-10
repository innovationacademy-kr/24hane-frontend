import React from "react";
import styles from "styles/components/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.LoadingCard}>
      <div className={styles.contents}>
        <div className={styles.LodingSpinner}></div>
      </div>
    </div>
  );
};

export default Loading;
