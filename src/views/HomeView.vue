<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import FoldCard from "@/components/home/FoldCard.vue";
import UserNumSection from "@/components/home/UserNumSection.vue";
import BarChartCard from "@/components/home/BarChartCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useHomeStore } from "@/stores/home";
import { useMonthLogStore } from "@/stores/monthlog";

const {
  apiMainInfo,
  getWeeklyGraph,
  getMonthlyGraph,
  getNumberOfPeople,
  getUserInfo,
} = useHomeStore();

const {
  apiLogsNowMonthData,
  getNowMonthAccTimeText,
  getNowDateAccTimeText,
  showNowMonthLogs,
} = useMonthLogStore();

onMounted(() => {
  apiMainInfo();
  apiLogsNowMonthData();
});

const todayAccTime = ref(getNowDateAccTimeText());
const monthAccTime = ref(getNowMonthAccTimeText());
const getWeeklyData = ref(getWeeklyGraph());
const getMonthlyData = ref(getMonthlyGraph());
const numberOfPeople = ref(getNumberOfPeople());

const isOnline = ref(getUserInfo().inoutState);

watch(
  () => showNowMonthLogs(),
  () => {
    todayAccTime.value = getNowDateAccTimeText();
    console.log("오늘 누적", todayAccTime.value);
  }
);

watch(
  () => showNowMonthLogs(),
  () => {
    monthAccTime.value = getNowMonthAccTimeText();
    console.log("월 누적시간", monthAccTime.value);
  }
);

watch(
  () => getWeeklyGraph(),
  () => {
    getWeeklyData.value = getWeeklyGraph();
    console.log("주간 그래프", getWeeklyData.value);
  }
);

watch(
  () => getMonthlyGraph(),
  () => {
    getMonthlyData.value = getMonthlyGraph();
    console.log("월간 그래프", getMonthlyData.value);
  }
);

watch(
  () => getNumberOfPeople(),
  () => {
    numberOfPeople.value = getNumberOfPeople();
  }
);

watch(
  () => getUserInfo(),
  () => {
    isOnline.value = getUserInfo().inoutState;
  }
);
</script>

<template>
  <main :class="{ online: isOnline === 'IN' }">
    <div class="bg" :class="{ online: isOnline === 'IN' }"></div>
    <FoldCard :hour="todayAccTime.hour" :min="todayAccTime.minute">
      <template #title>이용 시간</template>
    </FoldCard>
    <FoldCard
      class="m-16"
      :hour="monthAccTime.hour"
      :min="monthAccTime.minute"
      :isMonth="true"
    >
      <template #title>월 누적 시간</template>
    </FoldCard>
    <swiper
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination]"
    >
      <swiper-slide>
        <BarChartCard
          class="m-16 slide"
          :periodsData="getWeeklyData"
        ></BarChartCard>
      </swiper-slide>
      <swiper-slide>
        <BarChartCard
          class="m-16 slide"
          :isMonth="true"
          :periodsData="getMonthlyData"
        ></BarChartCard>
      </swiper-slide>
    </swiper>
    <UserNumSection
      :isOnline="isOnline === 'IN'"
      :numberOfPeople="numberOfPeople"
    />
  </main>
</template>

<style scoped>
main {
  padding: 80px 30px;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.bg.online {
  background-color: rgba(0, 0, 0, 0.5);
}

main.online {
  background: url("/home-bg.jpg") no-repeat center center fixed;
}

.m-16 {
  margin-top: 16px;
}
.mainColor {
  background-color: var(--signatue-1);
  color: var(--white);
}
</style>
