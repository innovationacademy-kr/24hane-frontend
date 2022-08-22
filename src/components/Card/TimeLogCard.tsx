import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import classes from "styles/components/Card/TimeLogCard.module.css";
import { CardProps } from "./Card";
import Icon from "components/common/Icon";
import { getLogsmonth, InOutLog } from "api/logsAPI";
import { todayUtils } from "utils/time";
import { AxiosError } from "axios";
import { FORM_URL } from "utils/const/const";
import { errorUtils } from "utils/error";

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const timeFormatKor = (seconds: number) => {
  const tempHours = Math.floor(seconds / 3600);
  const tempMinuts = Math.floor((seconds / 60) % 60);
  const tempSeconds = Math.floor(seconds % 60);

  return `${tempHours < 10 ? `0${tempHours}` : tempHours}시간${
    tempMinuts < 10 ? `0${tempMinuts}` : tempMinuts
  }분${tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds}초`;
};

const timeFormat = (seconds: number) => {
  const tempHours = Math.floor(seconds / 3600);
  const tempMinuts = Math.floor((seconds / 60) % 60);
  const tempSeconds = Math.floor(seconds % 60);

  return `${tempHours < 10 ? `0${tempHours}` : tempHours}:${
    tempMinuts < 10 ? `0${tempMinuts}` : tempMinuts
  }:${tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds}`;
};

const timeStampToFormatDay = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("MM/DD");
};

const timeStampToFormatTime = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("HH:mm:ss");
};

function LogCardContents() {
  const [logs, setLogs] = useState<InOutLog[]>([]);

  const fetchLogs = async () => {
    try {
      const { year, month } = todayUtils();

      const { inOutLogs } = await getLogsmonth(year, month);
      inOutLogs && setLogs(inOutLogs);
    } catch (e) {
      const error = e as Error | AxiosError;

      errorUtils(error);
    }
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  //console.log(dayjs.unix(1318781876).format("MM월DD일 HH:mm"));
  const accTime = logs.reduce((ac, cur) => ac + cur.durationSecond, 0);
  return (
    <>
      <div className={classes.timeLogContents}>
        <div className={classes.timeLogTitleWrapper}>
          <strong>이번달 총 누적 시간 : {timeFormatKor(accTime)}</strong>
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
              <tr className={classes.noData}>
                <td></td>
                <td>
                  <p>데이터가 아직 없습니다.</p>
                </td>
                <td></td>
              </tr>
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
