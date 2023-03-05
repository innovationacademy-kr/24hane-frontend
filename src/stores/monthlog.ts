import { ref } from "vue";
import { defineStore } from "pinia";
import { getLogsDate, getLogsmonth } from "@/api/logsAPI";
import type { LogsData, Log } from "@/types/logs";
import { getStorage, saveStorage } from "@/utils/localStorage";

export const useMonthLogStore = defineStore("MonthLog", () => {
  // 오늘 날짜
  const today = ref(new Date());

  const getStorageYear = () => {
    if (getStorage("showDate")) {
      return getStorage("showDate", "year");
    }
    return today.value.getFullYear();
  };

  // 2023 현재 보이는 년도
  const year = ref(getStorageYear());

  const getStorageMonth = () => {
    if (getStorage("showDate")) {
      return getStorage("showDate", "month");
    }
    return today.value.getMonth();
  };

  // 0 ~ 11 현재 보이는 달
  const month = ref(getStorageMonth());
  // 현재 월 1일의 요일
  const day = ref(new Date(year.value, month.value).getDay());
  // 현재 월의 총 일수
  const lastDate = ref(new Date(year.value, month.value + 1, 0).getDate());

  const getStorageDate = () => {
    if (getStorage("showDate")) {
      return getStorage("showDate", "date");
    }
    return today.value.getDate();
  };
  // 선택한 일
  const selectDate = ref(getStorageDate());

  // 로딩 여부
  const isLoading = ref(false);

  const showIsLoading = () => {
    return isLoading.value;
  };
  // 2023. 2 캘린더 타이틀
  const dateTitle = ref(`${year.value}. ${month.value + 1}`);

  const showToday = () => {
    return today.value;
  };
  const showYear = () => {
    return year.value;
  };
  const showMonth = () => {
    return month.value;
  };
  const showDay = () => {
    return day.value;
  };
  const showLastDate = () => {
    return lastDate.value;
  };

  const showSelectedDate = () => {
    return selectDate.value;
  };

  // 선택한 일이 변경되면, 로컬스토리지에 저장
  const setSelectedDate = (date: number) => {
    selectDate.value = date;
    saveStorageSelectedDate();
  };

  // 요일 계산
  const showDayText = () => {
    const day = new Date(year.value, month.value, selectDate.value).getDay();
    switch (day) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
    }
  };

  // 선택한 날짜 텍스트 (2.20 월요일)
  const showSelectedDateText = () => {
    return `${showMonth() + 1}.${showSelectedDate()} ${showDayText()}요일`;
  };

  const showDateTitle = () => {
    return dateTitle.value;
  };
  const setDateTitle = () => {
    dateTitle.value = `${showYear()}. ${showMonth() + 1}`;
  };

  // localStorage에 선택한 날 저장
  const saveStorageSelectedDate = () => {
    const showDate = {
      year: showYear(),
      month: showMonth(),
      date: showSelectedDate(),
    };
    saveStorage("showDate", showDate);
  };

  // 오늘 날짜로 초기화
  const resetSelectedDate = () => {
    year.value = today.value.getFullYear();
    month.value = today.value.getMonth();
    setSelectedDate(today.value.getDate());
    day.value = new Date(year.value, month.value).getDay();
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
    setDateTitle();
  };

  // 해당 월 1일의 요일 계산하기
  const calcFirstDay = () => {
    day.value = new Date(year.value, month.value).getDay();
  };

  // 월 마지막 날짜(총 일수) 계산하기
  const calcLastDate = () => {
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
  };

  // 24HANE 데이터가 시작된 날짜
  const FIRST_DAY = {
    year: 2022,
    month: 8,
    day: 1,
  };

  // 달력에 보여줄 날짜 계산하기
  const calcOptions = () => {
    const options = [];
    for (let year = FIRST_DAY.year; year <= showToday().getFullYear(); year++) {
      if (year == FIRST_DAY.year) {
        for (let month = FIRST_DAY.month - 1; month < 12; month++) {
          options.push(`${year}. ${month + 1}`);
        }
        continue;
      } else {
        for (let month = 0; month <= showToday().getMonth(); month++) {
          options.push(`${year}. ${month + 1}`);
        }
      }
    }
    return options;
  };

  // 달력에 보여줄 월 리스트 (2022. 8 ~ 2023. 현재 월)
  const monthList = ref(calcOptions());

  const showMonthList = () => {
    return monthList.value;
  };

  interface logsContainer {
    date: string;
    updatedAt: string;
    logs: LogsData;
  }

  // 월 로그 컨테이너 세팅
  const setLogsContainer = () => {
    if (getStorage("logsContainer")) {
      const data: logsContainer[] = getStorage("logsContainer");
      return data;
    }
    return monthList.value.map((option) => {
      const data: LogsData = { login: "", profileImage: "", inOutLogs: [] };
      return {
        date: option,
        updatedAt: "",
        logs: data,
      };
    });
  };

  // 월 로그들의 컨테이너
  const logsContainer = ref(setLogsContainer());

  const checkLogTime = (time: number | null) => {
    if (time === null) return -1;
    return new Date(time * 1000);
  };

  const getLogYear = (inLogTime: Date | -1, outLogTime: Date | -1) => {
    if (inLogTime !== -1) return inLogTime.getFullYear();
    if (outLogTime !== -1) return outLogTime.getFullYear();
  };

  const getLogMonth = (inLogTime: Date | -1, outLogTime: Date | -1) => {
    if (inLogTime !== -1) return inLogTime.getMonth();
    if (outLogTime !== -1) return outLogTime.getMonth();
  };

  const getLogDate = (inLogTime: Date | -1, outLogTime: Date | -1) => {
    if (inLogTime !== -1) return inLogTime.getDate();
    if (outLogTime !== -1) return outLogTime.getDate();
    return -1;
  };

  // 보고 있는 월 로그들 가져오기
  const showLogs = () => {
    return logsContainer.value.find(
      (log) => log.date === `${showYear()}. ${showMonth() + 1}`
    )?.logs;
  };

  const showNowMonthLogs = () => {
    const todayYear = today.value.getFullYear();
    const todayMonth = today.value.getMonth();
    return logsContainer.value.find(
      (log) => log.date === `${todayYear}. ${todayMonth + 1}`
    )?.logs;
  };

  // 보고 있는 월 로그 세팅하기
  const setMonthLogs = (data: LogsData) => {
    logsContainer.value.map((log) => {
      if (log.date === `${showYear()}. ${showMonth() + 1}`) {
        log.updatedAt = new Date().toISOString();
        log.logs = data;
      }
    });
    saveStorage("logsContainer", logsContainer.value);
  };

  // 이번 달 월 로그 세팅하기
  const setNowMonthLogs = (data: LogsData) => {
    logsContainer.value.map((log) => {
      if (
        log.date ===
        `${today.value.getFullYear()}. ${today.value.getMonth() + 1}`
      ) {
        log.updatedAt = new Date().toISOString();
        log.logs = data;
      }
    });
    saveStorage("logsContainer", logsContainer.value);
  };

  // 금 월의 오늘 로그 삭제하기
  const deleteTodayLogs = () => {
    logsContainer.value.map((monthlog) => {
      if (
        monthlog.date ===
        `${today.value.getFullYear()}. ${today.value.getMonth() + 1}`
      ) {
        monthlog.logs.inOutLogs = monthlog.logs.inOutLogs.filter((inoutLog) => {
          const inTime = checkLogTime(inoutLog.inTimeStamp);
          const outTime = checkLogTime(inoutLog.outTimeStamp);
          const date = getLogDate(inTime, outTime);
          if (date === today.value.getDate()) {
            return false;
          }
          return true;
        });
      }
    });
  };

  // 금 월의 오늘 로그 추가하기
  const insertTodayLogs = (data: LogsData) => {
    logsContainer.value.map((monthlog) => {
      if (
        monthlog.date ===
        `${today.value.getFullYear()}. ${today.value.getMonth() + 1}`
      ) {
        monthlog.logs.inOutLogs.push(...data.inOutLogs);
        return;
      }
    });
  };

  // 오늘 날짜 로그 api 호출
  const apiTodayData = async () => {
    const { data: logsData } = await getLogsDate(
      today.value.getFullYear(),
      today.value.getMonth() + 1,
      today.value.getDate()
    );
    deleteTodayLogs();
    insertTodayLogs(logsData);
  };

  const checkNowMonth = () => {
    if (showMonth() === today.value.getMonth()) {
      return true;
    }
    return false;
  };

  const checkHasLogs = () => {
    if (
      logsContainer.value.find(
        (log) => log.date === `${showYear()}. ${showMonth() + 1}`
      )?.logs.inOutLogs.length !== 0
    ) {
      return true;
    }
    return false;
  };

  // 지난 달이고 업데이트 날짜가 이번 달 이상이면 true 데이터 호출 안함.
  const checkPrevMonthUpdateAt = () => {
    const updatedAt = logsContainer.value.find(
      (log) => log.date === `${showYear()}. ${showMonth() + 1}`
    )?.updatedAt;
    if (updatedAt) {
      const date = new Date(updatedAt);
      if (date.getFullYear() > showYear() || date.getMonth() > showMonth()) {
        return true;
      }
    }
    return false;
  };

  // 이번 달이고 오늘 날짜면 true -> apiTodayData 호출
  const checkNowMonthUpdateAt = () => {
    const updatedAt = logsContainer.value.find(
      (log) => log.date === `${showYear()}. ${showMonth() + 1}`
    )?.updatedAt;
    if (updatedAt) {
      const date = new Date(updatedAt);
      if (
        date.getMonth() === today.value.getMonth() &&
        date.getDate() === today.value.getDate()
      ) {
        return true;
      }
    }
    return false;
  };

  // 월 로그 api 호출
  const apiLogsMonthData = async () => {
    if (checkHasLogs()) {
      if (checkNowMonth()) {
        if (checkNowMonthUpdateAt()) {
          apiTodayData();
          return;
        }
      } else {
        if (checkPrevMonthUpdateAt()) return;
      }
    }
    isLoading.value = true;
    try {
      const { data: monthData } = await getLogsmonth(
        year.value,
        month.value + 1
      );
      setMonthLogs(monthData);
      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const checkNowMonthLogs = () => {
    if (
      logsContainer.value.find(
        (log) =>
          log.date ===
          `${today.value.getFullYear()}. ${today.value.getMonth() + 1}`
      )?.logs.inOutLogs.length !== 0
    )
      return true;
    return false;
  };

  const checkTodayUpdateAt = () => {
    const updatedAt = logsContainer.value.find(
      (log) =>
        log.date ===
        `${today.value.getFullYear()}. ${today.value.getMonth() + 1}`
    )?.updatedAt;
    if (updatedAt) {
      const date = new Date(updatedAt);
      if (
        date.getMonth() === today.value.getMonth() &&
        date.getDate() === today.value.getDate()
      ) {
        return true;
      }
    }
    return false;
  };

  // 이번 달 로그 api 호출
  const apiLogsNowMonthData = async () => {
    isLoading.value = true;
    if (checkNowMonthLogs() && checkTodayUpdateAt()) {
      apiTodayData();
      isLoading.value = false;
      return;
    }
    isLoading.value = true;
    const { data: monthData } = await getLogsmonth(
      today.value.getFullYear(),
      today.value.getMonth() + 1
    );
    setNowMonthLogs(monthData);
    isLoading.value = false;
  };

  // 이전 달 버튼 클릭
  const prevMonth = () => {
    if (year.value === 2022 && month.value <= 7) return;
    month.value--;
    if (month.value < 0) {
      month.value = 11;
      year.value--;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
    setDateTitle();
    apiLogsMonthData();
  };

  // 다음 달 버튼 클릭
  const nextMonth = () => {
    if (
      today.value.getFullYear() === year.value &&
      today.value.getMonth() === month.value
    )
      return;
    month.value++;
    if (month.value > 11) {
      month.value = 0;
      year.value++;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
    setDateTitle();
    apiLogsMonthData();
  };

  // 일별 누적시간 색상 컬러셋
  const DATE_BG_COLOR = {
    0: "transparent", // 0
    1: "var(--cal-bg-1)", // 0 - 3
    2: "var(--cal-bg-2)", // 3 - 6
    3: "var(--cal-bg-3)", // 6 - 9
    4: "var(--cal-bg-4)", // 9 이상
  };

  // 일별 누적시간 색상 계산
  const getDateBgColor = (date: number) => {
    const accTime = getDateAccTime(date);
    if (accTime == 0) return DATE_BG_COLOR[0];
    if (accTime > 9) return DATE_BG_COLOR[4];
    if (accTime > 6) return DATE_BG_COLOR[3];
    if (accTime > 3) return DATE_BG_COLOR[2];
    return DATE_BG_COLOR[1];
  };

  // 오늘인지 체크
  const checkToday = (date: number) => {
    if (date !== today.value.getDate()) return false;
    if (showYear() !== today.value.getFullYear()) return false;
    if (showMonth() !== today.value.getMonth()) return false;
    return true;
  };

  const setDisit = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const getLogTimeText = (time: Date | -1) => {
    if (time === -1) return "-";
    return `${setDisit(time.getHours())}:${setDisit(
      time.getMinutes()
    )}:${setDisit(time.getSeconds())}`;
  };

  const changeTimetext = (accTime: number | null) => {
    if (accTime === null) return "누락";
    const hour = Math.floor(accTime / 3600);
    const min = Math.floor((accTime % 3600) / 60);
    const sec = Math.floor((accTime % 3600) % 60);

    return `${setDisit(hour)}:${setDisit(min)}:${setDisit(sec)}`;
  };

  // 선택한 일의 log 테이블 생성
  const getDateLogs = () => {
    const tempLogs: Log[] = [];
    const logs = showLogs();
    if (!logs || logs?.inOutLogs.length === 0) return tempLogs;
    logs.inOutLogs.map((log, index) => {
      const inLogTime = checkLogTime(log.inTimeStamp);
      const outLogTime = checkLogTime(log.outTimeStamp);
      const accLogTime = log.durationSecond;
      const LogYear = getLogYear(inLogTime, outLogTime);
      const logMonth = getLogMonth(inLogTime, outLogTime);
      const logDate = getLogDate(inLogTime, outLogTime);
      if (index === 0 && outLogTime === -1 && checkToday(logDate as number)) {
        tempLogs.push({
          inLogTime: getLogTimeText(inLogTime),
          outLogTime: "-",
          accLogTime: "-",
        });
      } else if (
        LogYear === showYear() &&
        logMonth === showMonth() &&
        logDate === selectDate.value
      ) {
        tempLogs.push({
          inLogTime: getLogTimeText(inLogTime),
          outLogTime: getLogTimeText(outLogTime),
          accLogTime: changeTimetext(accLogTime),
        });
      }
    });
    return tempLogs.reverse();
  };

  // 일별 누적시간 계산
  const getDateAccTime = (date: number) => {
    let duration = 0;
    const logs = showLogs();
    if (!logs || logs.inOutLogs.length === 0) return duration;
    logs.inOutLogs.forEach((log) => {
      if (!log.durationSecond || !log.inTimeStamp || !log.outTimeStamp) return;
      const inTime = checkLogTime(log.inTimeStamp);
      const outTime = checkLogTime(log.outTimeStamp);
      const LogYear = getLogYear(inTime, outTime);
      const logMonth = getLogMonth(inTime, outTime);
      const logDate = getLogDate(inTime, outTime);
      if (
        LogYear === showYear() &&
        logMonth === showMonth() &&
        logDate === date
      ) {
        duration += log.durationSecond;
      }
    });
    return duration / 3600;
  };

  const getNowDateAccTime = () => {
    let duration = 0;
    const logs = showNowMonthLogs();
    if (!logs || logs.inOutLogs.length === 0) return duration;
    const todayYear = today.value.getFullYear();
    const todayMonth = today.value.getMonth();
    const todayDate = today.value.getDate();
    logs.inOutLogs.forEach((log) => {
      if (!log.durationSecond || !log.inTimeStamp || !log.outTimeStamp) return;
      const inTime = checkLogTime(log.inTimeStamp);
      const outTime = checkLogTime(log.outTimeStamp);
      const LogYear = getLogYear(inTime, outTime);
      const logMonth = getLogMonth(inTime, outTime);
      const logDate = getLogDate(inTime, outTime);
      if (
        LogYear === todayYear &&
        logMonth === todayMonth &&
        logDate === todayDate
      ) {
        duration += log.durationSecond;
      }
    });
    return duration / 3600;
  };

  // 선택된 날짜의 누적시간 계산
  const getSelectedDateAccTimeText = () => {
    const accTime = getDateAccTime(showSelectedDate());
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    return `${hour}시간 ${min}분`;
  };

  const getNowDateAccTimeText = () => {
    const accTime = getNowDateAccTime();
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    return {
      hour: hour,
      minute: min,
    };
  };

  // 선택된 월의 누적시간 계산
  const getMonthAccTime = () => {
    let duration = 0;
    const logs = showLogs();
    if (!logs || logs.inOutLogs.length === 0) return duration;
    logs.inOutLogs.forEach((log) => {
      if (!log.durationSecond || !log.inTimeStamp || !log.outTimeStamp) return;
      const inTime = checkLogTime(log.inTimeStamp);
      const outTime = checkLogTime(log.outTimeStamp);
      const LogYear = getLogYear(inTime, outTime);
      const logMonth = getLogMonth(inTime, outTime);
      if (LogYear === showYear() && logMonth === showMonth()) {
        duration += log.durationSecond;
      }
    });
    return duration / 3600;
  };

  // 입력한 날짜의 누적시간 계산
  const getNowMonthAccTime = () => {
    let duration = 0;
    const logs = showNowMonthLogs();
    if (!logs || logs.inOutLogs.length === 0) return duration;
    const todayYear = today.value.getFullYear();
    const todayMonth = today.value.getMonth();
    logs.inOutLogs.forEach((log) => {
      if (!log.durationSecond || !log.inTimeStamp || !log.outTimeStamp) return;
      const inTime = checkLogTime(log.inTimeStamp);
      const outTime = checkLogTime(log.outTimeStamp);
      const LogYear = getLogYear(inTime, outTime);
      const logMonth = getLogMonth(inTime, outTime);
      if (LogYear === todayYear && logMonth === todayMonth) {
        duration += log.durationSecond;
      }
    });
    return duration / 3600;
  };

  // 선택된 월의 누적시간 텍스트
  const getMonthAccTimeText = () => {
    const accTime = getMonthAccTime();
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    return {
      hour: hour,
      minute: min,
    };
  };

  const getNowMonthAccTimeText = () => {
    const accTime = getNowMonthAccTime();
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    return {
      hour: hour,
      minute: min,
    };
  };

  // 오늘보다 과거인지 체크
  const checkPastToday = (date: number) => {
    if (showYear() < today.value.getFullYear()) return true; // 지난 년도
    if (showMonth() < today.value.getMonth()) return true;
    if (date <= today.value.getDate()) return true;
    return false;
  };

  // 캘린더 날짜 색상
  const getDateColor = (date: number) => {
    if (checkPastToday(date)) return "var(--color-black)";
  };

  // 캘린더 제목으로 월 선택 시
  const selectMonth = () => {
    const dateArr = showDateTitle().split(". ");
    if (
      year.value !== Number(dateArr[0]) ||
      month.value !== Number(dateArr[1]) - 1
    ) {
      year.value = Number(dateArr[0]);
      month.value = Number(dateArr[1]) - 1;
      setSelectedDate(1);
      calcFirstDay();
      calcLastDate();
      apiLogsMonthData();
    }
  };

  return {
    showIsLoading,
    showLogs,
    setMonthLogs,
    showNowMonthLogs,
    apiTodayData,
    apiLogsNowMonthData,
    apiLogsMonthData,
    showToday,
    showYear,
    showMonth,
    showMonthList,
    showLastDate,
    showDay,
    showSelectedDate,
    setSelectedDate,
    resetSelectedDate,
    showSelectedDateText,
    getSelectedDateAccTimeText,
    getMonthAccTimeText,
    getNowDateAccTimeText,
    getNowMonthAccTimeText,
    getDateLogs,
    dateTitle,
    showDateTitle,
    setDateTitle,
    calcOptions,
    prevMonth,
    nextMonth,
    getDateBgColor,
    checkPastToday,
    getDateColor,
    checkToday,
    selectMonth,
  };
});
