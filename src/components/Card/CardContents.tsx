import React from "react";
import classes from "styles/components/Card/CardContents.module.css";
import DurationTime from "components/DurationTime";
import CardItem from "components/Card/CardItem";
import { useAppSelector } from "app/features/hooks";

function CardContents() {
  const { todayDurationTime, monthDurationTime } = useAppSelector((state) => state.durationTimes);
  return (
    <section className={classes.cardContentsSection}>
      <CardItem title='오늘 누적시간'>
        <DurationTime startTime={todayDurationTime} />
      </CardItem>

      <CardItem title='이번달 누적시간'>
        <DurationTime startTime={monthDurationTime} />
      </CardItem>
    </section>
  );
}

export default CardContents;
