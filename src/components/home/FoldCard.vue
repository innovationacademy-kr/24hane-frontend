<script setup lang="ts">
import { ref, watch } from "vue";
import ChevronIcon from "@/components/icons/IconChevron.vue";
import CircleProgress from "@/components/home/CircleProgress.vue";
import LoadingAnimationVue from "@/components/common/LoadingAnimation.vue";
import { useHomeStore } from "@/stores/home";
import { getStorage, saveStorage } from "@/utils/localStorage";

const props = defineProps<{
  hour: number;
  min: number;
  isMonth?: boolean;
}>();

const {
  getGoalDateHour,
  getGoalMonthHour,
  setGoalDateHour,
  setGoalMonthHour,
  getIsLoading,
} = useHomeStore();

const isLoading = ref(getIsLoading());
const isOpen = ref(getStorage("isDayCardOpen") || false);
const goalTimeSet = () => {
  if (props.isMonth) {
    return Number(getGoalMonthHour());
  } else {
    return Number(getGoalDateHour());
  }
};

const goalTime = ref(goalTimeSet());
const colorSet = ref(props.isMonth);

watch(getIsLoading, (val) => {
  isLoading.value = val;
});

watch(goalTime, (val) => {
  if (props.isMonth) {
    setGoalMonthHour(Number(val));
  } else {
    setGoalDateHour(Number(val));
  }
});

const culculatePercent = () => {
  if (goalTime.value === 0) return 0;
  return Math.round(((props.hour + props.min / 60) / goalTime.value) * 100);
};

const clickHandler = () => {
  isOpen.value = !isOpen.value;
  saveStorage("isDayCardOpen", isOpen.value);
  if (isOpen.value) {
    colorSet.value = false;
  } else {
    colorSet.value = props.isMonth;
  }
};

const checkColor = () => {
  if (colorSet.value) {
    return "#ffffff";
  }
};

const dayOptions = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
];

const monthOptions = [
  80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380,
  400, 420,
];
</script>

<template>
  <div class="wrap" :class="{ on: isOpen, primaryColor: colorSet }">
    <div class="textWrap use tapHighlight" @click="clickHandler">
      <h2>
        <slot name="title"></slot>
      </h2>
      <div v-if="isLoading" class="loading"><LoadingAnimationVue /></div>
      <div v-else>
        <span class="timeNumber">
          {{ props.hour }}
        </span>
        <span class="timeUnit">시간{{ " " }}</span>
        <span class="timeNumber">
          {{ props.min }}
        </span>
        <span class="timeUnit">분</span>
        <div class="vIcon" :class="{ on: isOpen }">
          <ChevronIcon :color="checkColor()" />
        </div>
      </div>
    </div>
    <div class="textWrap goal" :class="{ on: isOpen }">
      <h2>목표 시간</h2>
      <div>
        <select v-if="!isMonth" v-model="goalTime" class="timeNumber select">
          <option
            v-for="index in dayOptions"
            :key="index"
            :value="index"
            :selected="index === 12"
          >
            {{ index }}
          </option>
        </select>
        <select v-else v-model="goalTime" class="timeNumber select">
          <option
            v-for="index in monthOptions"
            :key="index"
            :value="index"
            :selected="index === 80"
          >
            {{ index }}
          </option>
        </select>
        <span class="timeUnit">시간</span>
      </div>
    </div>
    <CircleProgress :isOpen="isOpen" :percent="culculatePercent()" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  padding: 26px 20px;
  user-select: none;
}

.wrap.on {
  height: 260px;
}

.wrap.primaryColor {
  background-color: var(--color-primary);
}
.wrap.primaryColor .textWrap h2,
.wrap.primaryColor .textWrap .timeUnit,
.wrap.primaryColor .textWrap .timeNumber {
  color: #fff;
}

.textWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  user-select: none;
}

.textWrap.use {
  cursor: pointer;
}

.textWrap.use.on {
  padding: 0;
}

.textWrap.goal {
  margin-top: 60px;
  margin-left: 18px;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.textWrap.goal.on {
  margin-top: 16px;
  opacity: 1;
}

.loading .wrap {
  width: 100px;
  height: 27px;
  padding: 0;
  background-color: transparent;
}

h2 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
  display: flex;
  align-items: center;
}

.timeNumber {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
}

.goal .timeNumber {
  width: 60px;
  height: 30px;
  border: none;
  text-align: right;
  padding-right: 5px;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  color: var(--black);
}

.select {
  direction: rtl;
  cursor: pointer;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.timeUnit {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--black);
}

.vIcon {
  display: inline-block;
  position: relative;
  margin-left: 10px;
  transition: transform 0.3s linear;
}

.vIcon.on {
  transform: rotate(90deg);
}
</style>
