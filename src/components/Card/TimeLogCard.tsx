import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import classes from "styles/components/Card/TimeLogCard.module.css";
import { CardProps } from "./Card";
import Icon from "components/common/Icon";
import { getLogsmonth, InoutLog } from "api/logsAPI";

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const timeFormat = (seconds: number) => {
  const tempHours = Math.floor(seconds / 3600);
  const temppMinuts = (seconds % 3600) / 60;

  const hours = tempHours < 10 ? `0${tempHours}` : tempHours;
  const minutes = temppMinuts < 10 ? `0${temppMinuts}` : temppMinuts;
  return `${hours}시간${minutes}분`;
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
  return dayjs.unix(1318781876).format("MM월DD일");
};

const timeStampToFormatTime = (timeStamp: number) => {
  return dayjs.unix(1318781876).format("HH:mm");
};

function LogCardContents() {
  const [logs, setLogs] = useState<InoutLog[]>([]);

  const fetchLogs = async () => {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const day = now.getDate();
      const month = now.getMonth() + 1;

      const data = await getLogsmonth(year, month, day);
      setLogs(data.inoutLogs);
    } catch (e) {
      console.log(e);
      alert("유저 정보가 올바르지 않습니다.\n 반복될 경우 관리자에게 요청해주세요");
    }
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  //console.log(dayjs.unix(1318781876).format("MM월DD일 HH:mm"));
  const accTime = logs.reduce((ac, cur) => ac + cur.durationSecond, 0);
  console.log(logs);
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
            {logs.map((log: InoutLog, index) => {
              const 입실날 = timeStampToFormatDay(log.inTimeStamp);
              const 입실시간 = timeStampToFormatTime(log.inTimeStamp);
              const 퇴실날 = timeStampToFormatDay(log.outTImeStamp);
              const 퇴실시간 = timeStampToFormatTime(log.outTImeStamp);
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
            })}
          </tbody>
        </table>
      </div>
      <a href='#!' target='_blank'>
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
