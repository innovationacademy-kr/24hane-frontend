import React, { ReactNode } from "react";
import classes from "styles/components/Card/CardItem.module.css";
type PropsTypes = {
  title: string;
  children: ReactNode;
};

function CardItem({ title, children }: PropsTypes) {
  return (
    <div className={classes.cardItem}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  );
}

export default CardItem;
