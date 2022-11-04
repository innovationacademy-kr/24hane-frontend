import React from "react";

import styles from "styles/components/Card/TimeLogCard.module.css";
import { CardProps } from "./Card";
import Icon from "components/common/Icon";
import LogCardContents from "./LogCardContents";

type TimeLogCardProps = CardProps;

function TimeLogCard({ handleFlip }: TimeLogCardProps) {
  return (
    <div className={styles.timeLogCard}>
      <Icon name='menu' classname={styles.menuIcon} handleOnclick={handleFlip} />
      <LogCardContents />
    </div>
  );
}

export default TimeLogCard;
