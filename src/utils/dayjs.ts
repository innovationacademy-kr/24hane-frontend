import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const dateToFormatFullKor = (date: string) => {
  return dayjs(date).format("YYYY년 M월 D일 hh시 mm분 ss초");
};

const timeStampToFormatDay = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("MM/DD");
};

const timeStampToFormatTime = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("HH:mm:ss");
};

export { timeStampToFormatDay, dateToFormatFullKor, timeStampToFormatTime };
