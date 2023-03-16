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
  apiAccTimes,
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
  apiAccTimes();
});

const todayAccTime = ref(getNowDateAccTimeText());
const monthAccTime = ref(getNowMonthAccTimeText());
const getWeeklyData = ref(getWeeklyGraph());
const getMonthlyData = ref(getMonthlyGraph());
const numberOfPeople = ref(getNumberOfPeople());

const isOnline = ref(getUserInfo().inoutState);

watch(showNowMonthLogs, () => {
  todayAccTime.value = getNowDateAccTimeText();
});

watch(showNowMonthLogs, () => {
  monthAccTime.value = getNowMonthAccTimeText();
});

watch(getWeeklyGraph, () => {
  getWeeklyData.value = getWeeklyGraph();
});

watch(getMonthlyGraph, () => {
  getMonthlyData.value = getMonthlyGraph();
});

watch(getNumberOfPeople, () => {
  numberOfPeople.value = getNumberOfPeople();
});

watch(getUserInfo, () => {
  isOnline.value = getUserInfo().inoutState;
});
</script>

<template>
  <main>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  overflow: hidden;
}
.bg.online {
  background: url("/home-bg.jpg") no-repeat center center fixed;
  background-size: auto 100%;
}
.bg.online::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

.m-16 {
  margin-top: 16px;
}
.mainColor {
  background-color: var(--signatue-1);
  color: var(--white);
}
</style>
