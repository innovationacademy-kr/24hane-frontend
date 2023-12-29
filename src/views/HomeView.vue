<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import FoldCard from "@/components/home/FoldCard.vue";
import FoldCardCompact from "@/components/home/FoldCardCompact.vue";
import UserNumSection from "@/components/home/UserNumSection.vue";
import BarChartCard from "@/components/home/BarChartCard.vue";
import DefaultButton from "@/components/common/DefaultButton.vue";
import DefaultModal from "@/components/common/DefaultModal.vue";
import ExclamationMarkIcon from "@/components/icons/IconExclamationMark.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useHomeStore } from "@/stores/home";

const {
  apiMainInfo,
  getAccDate,
  getAccMonth,
  getAccAcceptedMonth,
  getWeeklyGraph,
  getMonthlyGraph,
  getNumberOfPeople,
  getUserInfo,
  apiAccTimes,
  getInfoMessages,
  getIsLoading,
} = useHomeStore();

onMounted(() => {
  apiMainInfo();
  apiAccTimes();
});

const todayAccTime = ref(getAccDate());
const monthAccTime = ref(getAccMonth());
const acceptedMonthAccTime = ref(getAccAcceptedMonth());
const getWeeklyData = ref(getWeeklyGraph());
const getMonthlyData = ref(getMonthlyGraph());
const numberOfPeople = ref(getNumberOfPeople());
const isLoading = ref(getIsLoading());

const isOnline = ref(getUserInfo().inoutState);

const intervalId = ref(0);

enum InfoModal {
  NONE = "",
  ACCEPT = "fundInfoNotice",
  TODAY = "tagLatencyNotice",
}

const isClickInfo = ref(InfoModal.NONE);

watch(getAccDate, () => {
  todayAccTime.value = getAccDate();
});

watch(getAccMonth, () => {
  monthAccTime.value = getAccMonth();
});

watch(getAccAcceptedMonth, () => {
  acceptedMonthAccTime.value = getAccAcceptedMonth();
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

watch(getIsLoading, (val) => {
  isLoading.value = val;
});

watch(getUserInfo, () => {
  isOnline.value = getUserInfo().inoutState;
  if (isOnline.value === "IN") {
    startTimer();
  } else {
    stopTimer();
  }
});

const updateTime = () => {
  todayAccTime.value = getAccDate();
};

const startTimer = () => {
  stopTimer();
  const now = new Date();
  const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

  // 첫 번째 정각까지 기다리기
  setTimeout(() => {
    updateTime();

    // 그 후 매 분마다 업데이트
    intervalId.value = window.setInterval(updateTime, 60000);
  }, delay);
};

const stopTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
};
</script>

<template>
  <main>
    <div class="bg" :class="{ online: isOnline === 'IN' }"></div>
    <FoldCard :hour="todayAccTime.hour" :min="todayAccTime.minute">
      <template #title>
        <ExclamationMarkIcon
          @click.stop="isClickInfo = InfoModal.TODAY"
          class="infoIcon"
        />이용 시간</template
      >
    </FoldCard>
    <FoldCardCompact
      class="m-16"
      :hour="monthAccTime.hour"
      :min="monthAccTime.minute"
      :acceptedHour="acceptedMonthAccTime.hour"
      :acceptedMin="acceptedMonthAccTime.minute"
    >
      <template #title>월 누적 시간</template>
      <template #title2>
        <ExclamationMarkIcon
          @click.stop="isClickInfo = InfoModal.ACCEPT"
          class="infoIcon"
        />인정 시간</template
      >
    </FoldCardCompact>
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
  <DefaultModal v-if="!isLoading && isClickInfo != InfoModal.NONE">
    <template #title>
      <span
        class="bold"
        v-html="getInfoMessages()[isClickInfo].title.replace(/\n/g, '<br>')"
      ></span>
    </template>
    <template #content>
      <span
        class="bold"
        v-html="getInfoMessages()[isClickInfo].content.replace(/\n/g, '<br>')"
      ></span>
    </template>
    <template #button>
      <DefaultButton
        title="닫기"
        background="var(--divider)"
        color="var(--black)"
        marginTop="10px"
        @click="isClickInfo = InfoModal.NONE"
      />
    </template>
  </DefaultModal>
</template>

<style scoped>
main {
  padding: 70px 30px 100px;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateZ(0);
}

.bg.online {
  background: url("/home-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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

.infoIcon {
  width: 16px;
  height: 16px;
  margin-right: 2px;
  cursor: pointer;
}
.infoIcon:hover {
  opacity: 0.6;
}

.bold {
  font-weight: 700;
}
</style>
