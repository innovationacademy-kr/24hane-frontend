import React from "react";
import classes from "styles/components/Card/CardContents.module.css";
import DurationTime from "components/DurationTime";
import CardItem from "components/Card/CardItem";
import { useMainAccTimesQuery } from "utils/hooks/queries/useMainAccTimesQuery";
import { dateToFormatFullKor } from "utils/dayjs";
import { UserInfoType } from "types/User";
import { userIsIn } from "utils/user";

type CardContentsProps = Pick<UserInfoType, "tagAt" | "inoutState">;

function CardContents({ tagAt, inoutState }: CardContentsProps) {
  const { data } = useMainAccTimesQuery();
  return (
    <section className={classes.cardContentsSection}>
      <div className={classes.durationItems}>
        <CardItem title='오늘 누적시간'>
          <DurationTime startTime={data?.todayAccumationTime} />
        </CardItem>

        <CardItem title='이번달 누적시간'>
          <DurationTime startTime={data?.monthAccumationTime} />
        </CardItem>
      </div>
      {tagAt && (userIsIn(inoutState) ? <p> 최근 입실 시간 {dateToFormatFullKor(tagAt)}</p> : null)}
    </section>
  );
}

export default CardContents;
