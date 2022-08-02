import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import classes from "styles/components/Card/TimeLogCard.module.css";
import { CardProps } from "./Card";
import Icon from "components/common/Icon";
import { getLogsmonth, InOutLog } from "api/logsAPI";
import { getToday } from "utils/time";
import axios, { AxiosError } from "axios";
import { FORM_URL } from "utils/const/const";

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const timeFormat = (seconds: number) => {
  const tempHours = Math.floor(seconds / 3600);
  const tempMinuts = Math.floor((seconds % 3600) / 60);
  const tempSeconds = Math.floor(seconds % (3600 * 60));

  return `${tempHours < 10 ? `0${tempHours}` : tempHours}시간${
    tempMinuts < 10 ? `0${tempMinuts}` : tempMinuts
  }분${tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds}초`;
};

// const logsData = [
//   {
//     id: 1,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 2,
//     checkinAt: "2020-07-11T13:00:00",
//     checkoutAt: "2020-07-11T18:00:00",
//     durationSecond: 10860,
//   },
//   {
//     id: 3,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 4,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 5,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 126,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 6,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 7,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 8,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 9,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 10,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 11,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 12,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 14,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 161,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 15,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 16,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 17,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 18,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 19,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 20,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 21,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 22,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 23,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 24,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 25,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
//   {
//     id: 26,
//     checkinAt: "2020-07-10T13:00:00",
//     checkoutAt: "2020-07-10T18:00:00",
//     durationSecond: 3600,
//   },
// ];

const timeStampToFormatDay = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("MM월DD일");
};

const timeStampToFormatTime = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("HH:mm:ss");
};

function LogCardContents() {
  const [logs, setLogs] = useState<InOutLog[]>([]);

  const fetchLogs = async () => {
    try {
      const { year, month } = getToday();

      const { inOutLogs } = await getLogsmonth(year, month);
      inOutLogs && setLogs(inOutLogs);
    } catch (e) {
      const error = e as Error | AxiosError;
      console.log(error);
      if (axios.isAxiosError(error)) {
      }
    }
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  //console.log(dayjs.unix(1318781876).format("MM월DD일 HH:mm"));
  console.log(logs);
  const accTime = logs.reduce((ac, cur) => ac + cur.durationSecond, 0);
  return (
    <>
      <div className={classes.timeLogContents}>
        <div className={classes.timeLogTitleWrapper}>
          <p>총 누적 시간 : {timeFormat(accTime)}</p>
          <strong>이번달</strong>
        </div>
        <table className={classes.timeLogTable}>
          <thead>
            <tr>
              <th>입실</th>
              <th>퇴실</th>
              <th>체류시간</th>
            </tr>
          </thead>
          <tbody>
            {logs.length > 0 ? (
              logs.map((log: InOutLog, index) => {
                const 입실날 = timeStampToFormatDay(log.inTimeStamp);
                const 입실시간 = timeStampToFormatTime(log.inTimeStamp);
                const 퇴실날 = timeStampToFormatDay(log.outTimeStamp);
                const 퇴실시간 = timeStampToFormatTime(log.outTimeStamp);
                return (
                  <tr key={index} className={classes.row}>
                    <td>
                      <p>{입실날}</p>
                      <strong>{입실시간}</strong>
                    </td>
                    <td>
                      <p>{퇴실날}</p>
                      <strong>{퇴실시간}</strong>
                    </td>
                    <td>
                      <strong>{timeFormat(log.durationSecond)}</strong>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>데이터가 없습니다.</p>
            )}
          </tbody>
        </table>
      </div>
      <a href={FORM_URL} rel='noreferrer' target='_blank'>
        문의하기
      </a>
    </>
  );
}

type TimeLogCardProps = CardProps;

function TimeLogCard({ handleFlip }: TimeLogCardProps) {
  return (
    <div className={classes.timeLogCard}>
      <Icon name='menu' classname={classes.menuIcon} handleOnclick={handleFlip} />
      <LogCardContents />
    </div>
  );
}

export default TimeLogCard;
