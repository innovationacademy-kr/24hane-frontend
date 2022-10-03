import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const timeStampToFormatFullKor = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("YYYY년 M월 D일 h시 mm분 ss초");
};

const timeStampToFormatDay = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("MM/DD");
};

const timeStampToFormatTime = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("HH:mm:ss");
};

export { timeStampToFormatDay, timeStampToFormatFullKor, timeStampToFormatTime };
