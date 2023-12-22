<script setup lang="ts">
import { useMonthLogStore } from "@/stores/monthlog";
import { ref, watch } from "vue";
const { getMonthAccTimeText, getMonthAcceptedTimeText, showLogs } =
  useMonthLogStore();

const monthText = ref(getMonthAccTimeText());
const acceptedMonthText = ref(getMonthAcceptedTimeText());
const isClicked = ref(false);

watch(showLogs, () => {
  monthText.value = getMonthAccTimeText();
  acceptedMonthText.value = getMonthAcceptedTimeText();
});
</script>

<template>
  <div v-if="!isClicked" @click="isClicked = !isClicked" class="month">
    총 {{ monthText.hour }}시간 {{ monthText.minute }}분
  </div>
  <div v-else @click="isClicked = !isClicked" class="month acceptTime">
    인정 시간 {{ acceptedMonthText.hour }}시간 {{ acceptedMonthText.minute }}분
  </div>
</template>

<style scoped>
.month {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin: 20px 0;
  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
  transition: border 0.2s ease-in-out;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .month {
    border: 2px solid #fff;
  }
}

.acceptTime {
  background-color: var(--color-primary);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25) inset;
}
</style>
