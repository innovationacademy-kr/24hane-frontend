<script setup lang="ts">
import { ref, watch } from "vue";
import ChevronIcon from "@/components/icons/IconChevron.vue";
import LoadingAnimationVue from "@/components/common/LoadingAnimation.vue";
import { useHomeStore } from "@/stores/home";
import { getStorage, saveStorage } from "@/utils/localStorage";

const props = defineProps<{
  hour: number;
  min: number;
  acceptedHour: number;
  acceptedMin: number;
}>();

const { getIsLoading } = useHomeStore();
const isLoading = ref(getIsLoading());

const isOpen = ref(getStorage("isMonthCardOpen") || false);

watch(getIsLoading, (val) => {
  isLoading.value = val;
});

const checkColor = () => {
  if (!isOpen.value) {
    return "#ffffff";
  }
};

const clickHandler = () => {
  isOpen.value = !isOpen.value;
  saveStorage("isMonthCardOpen", isOpen.value);
};
</script>

<template>
  <div class="wrap" :class="{ on: isOpen, primaryColor: !isOpen }">
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
    <div class="textWrap accepted" :class="{ on: isOpen }">
      <h2>
        <slot name="title2"></slot>
      </h2>
      <div v-if="isLoading" class="loading"><LoadingAnimationVue /></div>
      <div v-else>
        <span class="timeNumber">
          {{ props.acceptedHour }}
        </span>
        <span class="timeUnit">시간{{ " " }}</span>
        <span class="timeNumber">
          {{ props.acceptedMin }}
        </span>
        <span class="timeUnit">분</span>
      </div>
    </div>
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
  height: 120px;
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

.textWrap.accepted {
  margin-top: 60px;
  margin-right: 18px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.textWrap.accepted.on {
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

.timeUnit {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--black);
}

.accepted h2,
.accepted .timeUnit,
.accepted .timeNumber {
  color: var(--color-primary);
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
