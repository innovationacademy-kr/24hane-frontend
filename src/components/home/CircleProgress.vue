<script setup lang="ts">
import CircleProgressBg from "@/components/images/CircleProgressBg.vue";

const props = defineProps<{
  isOpen: boolean;
  percent: number;
}>();
const calcLine = () => {
  // 350은 svg의 라인 길이 = 0
  const totalLine = 350;
  if (!props.isOpen) {
    return totalLine;
  }
  const line = totalLine - (totalLine * props.percent) / 100;
  if (line < 0) return 0;
  return line;
};
</script>

<template>
  <div class="circle">
    <div class="text">{{ props.percent }}<span class="percent">%</span></div>
    <CircleProgressBg class="bg" />
    <svg
      class="progress"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint_linear_progress"
          x1="104"
          y1="13.25"
          x2="62.9394"
          y2="121.604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00BABC" stop-opacity="0.04" />
          <stop offset="1" stop-color="#735BF2" />
        </linearGradient>
      </defs>
      <circle
        :style="{ strokeDashoffset: calcLine() }"
        cx="60"
        cy="60"
        r="56"
        stroke-linecap="round"
      ></circle>
    </svg>
  </div>
</template>

<style scoped>
.circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 10px auto 0;
  user-select: none;
}

.circle .progress {
  position: absolute;
  top: 0;
  left: 0;
}

.progress circle {
  fill: none;
  stroke: url(#paint_linear_progress);
  stroke-width: 8px;
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
  transition: all 1s ease;
}

.circle .text {
  position: absolute;
  width: 100%;
  top: 50%;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  transform: translateY(-50%);
  color: var(--black);
}

.circle .text .percent {
  font-size: 0.875rem;
}
</style>
