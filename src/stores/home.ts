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

  const goalDateHour = ref(getStorage("goalDateHour") || 0);
  const goalMonthHour = ref(getStorage("goalMonthHour") || 0);

  const numberOfPeople = ref({
    gaepo: 0,
    seocho: 0,
  });

  const dumyData: PeriodData[] = [
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
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

  const getNumberOfPeople = () => {
    return numberOfPeople.value;
  };

  const getWeeklyGraph = () => {
    return weeklyGraph.value;
  };

  const getMonthlyGraph = () => {
    return monthlyGraph.value;
  };

  /*  {
   "login": "joopark",
   "profileImage": "https://cdn.intra.42.fr/users/joopark.jpg",
   "isAdmin": false,
   "tagAt": null
   "inoutState": "OUT",

   "gaepo": 42,
   "seocho": 42,
 } */

  const apiMainInfo = async () => {
    try {
      const { data: mainInfo } = await getMainInfo();
      console.log(mainInfo);
      userInfo.value = {
        login: mainInfo.login,
        isAdmin: mainInfo.isAdmin,
        profileImage: mainInfo.profileImage,
        inoutState: mainInfo.inoutState,
        tagAt: mainInfo.tagAt,
      };
      numberOfPeople.value = {
        gaepo: mainInfo.gaepo ?? 0,
        seocho: mainInfo.seocho ?? 0,
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

  const apiAccTimes = async () => {
    try {
      isLoading.value = true;
      const { data: accTimes } = await getAccTimes();
      console.log(accTimes);
      accDate.value = calcSecToTime(accTimes.todayAccumationTime);
      accMonth.value = calcSecToTime(accTimes.monthAccumationTime);
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
    getNumberOfPeople,
    getWeeklyGraph,
    getMonthlyGraph,
    weeklyGraph,
    apiMainInfo,
    apiAccTimes,
  };
});
