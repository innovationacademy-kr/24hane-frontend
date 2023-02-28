<script setup lang="ts">
import { useMonthLogStore } from "@/stores/monthlog";
import { ref, watch } from "vue";
const { getMonthAccTimeText, showLogs } = useMonthLogStore();

const monthText = ref(getMonthAccTimeText());

watch(showLogs, () => {
  monthText.value = getMonthAccTimeText();
  console.log("총 월 시간 왓치 동작!");
});
</script>

<template>
  <div class="month">총 {{ monthText.hour }}시간 {{ monthText.minute }}분</div>
</template>

<style scoped>
.month {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin: 20px 0 30px;
  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid #fff;
}
</style>
