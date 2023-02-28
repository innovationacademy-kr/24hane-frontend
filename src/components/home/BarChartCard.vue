<script setup lang="ts">
import type { PeriodData } from "@/types/logs";
import { ref, computed } from "vue";

const props = defineProps<{
  periodsData: PeriodData[];
  isMonth?: boolean;
}>();

const periodsData = ref(props.periodsData);

const timeArr = computed(() => {
  const arr: number[] = [];
  if (!periodsData.value) return arr;
  periodsData.value.forEach((data) => {
    arr.push(data.total);
  });
  return arr;
});

const calcTimePercent = (time: number, times: number[]) => {
  const maxTime = Math.max(...times);
  const percent = Math.round((time / maxTime) * 100);
  if (!percent) return "6px";
  return percent + "%";
};

const calcAvgTime = (time: number) => {
  return (time / 7).toFixed(1);
};

const clickIndex = ref(0);
</script>

<template>
  <div class="wrap">
    <h3 v-if="isMonth">최근 월간 그래프<span> (6개월)</span></h3>
    <h3 v-else>최근 주간 그래프<span> (6주)</span></h3>
    <div class="detailView">
      <div class="title">{{ periodsData[clickIndex].periods }}</div>
      <div class="timeView">
        <div class="time">총 {{ periodsData[clickIndex].total }}시간</div>
        <div class="time">
          평균 {{ calcAvgTime(periodsData[clickIndex].total) }}시간
        </div>
      </div>
    </div>
    <ul>
      <li
        class="tapHighlight"
        :class="{ on: clickIndex == i }"
        v-for="(data, i) in periodsData"
        :key="i"
        @click="clickIndex = i"
      >
        <div :style="{ height: calcTimePercent(data.total, timeArr) }"></div>
      </li>
    </ul>
    <div class="preiodBox">
      <div class="period">
        <div class="text">최근 순</div>
        <div class="text">오래된 순</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px;
}

h3 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--black);
}
h3 span {
  font-weight: 400;
  color: var(--gray);
}

.detailView {
  font-size: 0.75rem;
  color: #fff;
  text-align: right;
  margin-top: 10px;
  transition: transform 0.3s ease-in-out;
  background: var(--black);
  height: 60px;
  border-radius: 10px;
  padding: 11px 20px;
  display: flex;
  justify-content: space-between;
}

.detailView div {
  font-weight: 700;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px auto 0;
  height: 90px;
  padding: 0 20px;
  max-width: 280px;
}

ul li {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

ul li:active {
  transform: scale(1.1) translateY(-5px);
}

ul li div {
  background: var(--bar-gradation);
  list-style: none;
  display: inline-block;
  width: 26px;
  border-radius: 4px 4px 0px 0px;
}

ul li.on::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: -21px;
  left: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid transparent;
  border-top: 13px solid var(--black);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.preiodBox {
  margin-top: 4px;
}

.period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 280px;
  padding: 0 20px;
  margin: 0 auto;
}
.text {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gray);
}
</style>
