import React from "react";
import classes from "styles/components/Card/CardContents.module.css";
import DurationTime from "components/DurationTime";
import CardItem from "components/Card/CardItem";
import { useMainAccTimesQuery } from "utils/hooks/queries/useMainAccTimesQuery";

function CardContents() {
  const { data } = useMainAccTimesQuery();

  return (
    <section className={classes.cardContentsSection}>
      <CardItem title='오늘 누적시간'>
        <DurationTime startTime={data?.todayAccumationTime} />
      </CardItem>

      <CardItem title='이번달 누적시간'>
        <DurationTime startTime={data?.monthAccumationTime} />
      </CardItem>
    </section>
  );
}

export default CardContents;
