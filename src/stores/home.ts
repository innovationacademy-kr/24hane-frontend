import { ref } from "vue";
import { defineStore } from "pinia";
import { getMainInfo, getAccTimes } from "@/api/userAPI";
import type { PeriodData } from "@/types/logs";
import { saveStorage, getStorage } from "@/utils/localStorage";

export const useHomeStore = defineStore("home", () => {
  const isLoading = ref(false);

  const userInfo = ref({
    login: "",
    isAdmin: false,
    profileImage: "",
    inoutState: "OUT",
    tagAt: null,
  });

  const accDate = ref({
    hour: 0,
    minute: 0,
  });

  const accMonth = ref({
    hour: 0,
    minute: 0,
  });

  const goalDateHour = ref(getStorage("goalDateHour") || 8);
  const goalMonthHour = ref(getStorage("goalMonthHour") || 80);

  const weeklyAccTime = ref([0, 0, 0, 0, 0, 0]);
  const monthlyAccTime = ref([0, 0, 0, 0, 0, 0]);

  const numberOfPeople = ref({
    gaepo: 0,
    seocho: 0,
  });

  const dumyData: PeriodData[] = [
    {
      periods: "없음",
      total: "0",
    },
    {
      periods: "없음",
      total: "0",
    },
    {
      periods: "없음",
      total: "0",
    },
    {
      periods: "없음",
      total: "0",
    },
    {
      periods: "없음",
      total: "0",
    },
    {
      periods: "없음",
      total: "0",
    },
  ];

  const weeklyGraph = ref<PeriodData[]>(dumyData);
  const monthlyGraph = ref<PeriodData[]>(dumyData);

  const getIsLoading = () => {
    return isLoading.value;
  };

  const getUserInfo = () => {
    return userInfo.value;
  };

  const getAccDate = () => {
    return accDate.value;
  };

  const getAccMonth = () => {
    return accMonth.value;
  };

  const getGoalDateHour = () => {
    return goalDateHour.value;
  };

  const getGoalMonthHour = () => {
    return goalMonthHour.value;
  };

  const setGoalDateHour = (hour: number) => {
    goalDateHour.value = hour;
    saveStorage("goalDateHour", hour);
  };

  const setGoalMonthHour = (hour: number) => {
    goalMonthHour.value = hour;
    saveStorage("goalMonthHour", hour);
  };

  const getWeeklyAccTime = () => {
    return weeklyAccTime.value;
  };

  const getMonthlyAccTime = () => {
    return monthlyAccTime.value;
  };

  const getNumberOfPeople = () => {
    return numberOfPeople.value;
  };

  const getWeeklyGraph = () => {
    return weeklyGraph.value;
  };

  const getMonthlyGraph = () => {
    return monthlyGraph.value;
  };

  const apiMainInfo = async () => {
    try {
      const { data: mainInfo } = await getMainInfo();
      userInfo.value = {
        login: mainInfo.login,
        isAdmin: mainInfo.isAdmin,
        profileImage: mainInfo.profileImage,
        inoutState: mainInfo.inoutState,
        tagAt: mainInfo.tagAt,
      };
      numberOfPeople.value = {
        gaepo: mainInfo.gaepo,
        seocho: mainInfo.seocho,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const calcSecToTime = (sec: number) => {
    const hour = Math.floor(sec / 3600);
    const minute = Math.floor((sec % 3600) / 60);
    return { hour, minute };
  };

  const calHours = (time: number) => {
    const str = (time / 3600).toFixed(1);
    return str;
  };

  const calcWeely = (index: number) => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate();
    let nowDay = now.getDay();
    if (nowDay === 0) nowDay = 7;
    const weekStartDate = new Date(
      nowYear,
      nowMonth,
      nowDate - (nowDay - 1 + index * 7)
    );
    const weekEndDate = new Date(
      nowYear,
      nowMonth,
      nowDate - (nowDay - 1 + index * 7) + 6
    );
    return `${weekStartDate.getMonth() + 1}.${weekStartDate.getDate()}(월) - ${
      weekEndDate.getMonth() + 1
    }.${weekEndDate.getDate()}(일)`;
  };

  const setWeeklyGraph = () => {
    const tempData = dumyData.map((data, index) => {
      return {
        periods: calcWeely(index),
        total: calHours(weeklyAccTime.value[index]),
      };
    });
    weeklyGraph.value = tempData;
  };

  const calcMonthly = (index: number) => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const monthStartDate = new Date(nowYear, nowMonth - index, 1);
    return `${monthStartDate.getFullYear()}.${monthStartDate.getMonth() + 1}`;
  };

  const setMonthlyGraph = () => {
    const tempData = dumyData.map((data, index) => {
      return {
        periods: calcMonthly(index),
        total: calHours(monthlyAccTime.value[index]),
      };
    });
    monthlyGraph.value = tempData;
  };

  const apiAccTimes = async () => {
    try {
      isLoading.value = true;
      const { data: accTimes } = await getAccTimes();
      accDate.value = calcSecToTime(accTimes.todayAccumationTime);
      accMonth.value = calcSecToTime(accTimes.monthAccumationTime);
      weeklyAccTime.value = accTimes.sixWeekAccumulationTime;
      monthlyAccTime.value = accTimes.sixMonthAccumulationTime;
      setWeeklyGraph();
      setMonthlyGraph();
      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  return {
    getIsLoading,
    getUserInfo,
    getAccDate,
    getAccMonth,
    getGoalDateHour,
    getGoalMonthHour,
    setGoalDateHour,
    setGoalMonthHour,
    getWeeklyAccTime,
    getMonthlyAccTime,
    getNumberOfPeople,
    getWeeklyGraph,
    getMonthlyGraph,
    weeklyGraph,
    apiMainInfo,
    apiAccTimes,
  };
});
