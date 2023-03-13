<script setup lang="ts">
import CalPagination from "@/components/calendar/CalPagination.vue";
import CalWeek from "@/components/calendar/CalWeek.vue";
import AccMonth from "@/components/calendar/AccMonth.vue";
import LogTable from "@/components/calendar/LogTable.vue";
import LoadingAnimation from "@/components/common/LoadingAnimation.vue";
import { useMonthLogStore } from "@/stores/monthlog";
import { onMounted, ref, watch } from "vue";

const monthLog = useMonthLogStore();
const {
  showSelectedDate,
  showLastDate,
  showDay,
  getDateBgColor,
  getDateColor,
  setSelectedDate,
  checkToday,
  apiLogsMonthData,
  showIsLoading,
  checkPastToday,
} = monthLog;

onMounted(() => {
  apiLogsMonthData();
});

const clickDate = (date: number) => {
  if (checkPastToday(date)) setSelectedDate(date);
};

const lastDate = ref(showLastDate());
const day = ref(showDay());
const isLoading = ref(showIsLoading());

watch(showLastDate, (val) => {
  lastDate.value = val;
});
watch(showDay, (val) => {
  day.value = val;
});

watch(showIsLoading, (val) => {
  isLoading.value = val;
});
</script>

<template>
  <main>
    <CalPagination />
    <div class="calendar">
      <CalWeek />
      <div v-if="isLoading" class="loading">
        <LoadingAnimation />
      </div>
      <div v-else id="days" class="days">
        <div v-for="i in day" :key="i" class="noday"></div>
        <div
          v-for="date in lastDate"
          :key="date"
          @click="($event) => clickDate(date)"
          class="day tapHighlight"
          :style="{
            background: getDateBgColor(date),
            color: getDateColor(date),
          }"
          :class="{
            today: checkToday(date),
            selected: date === showSelectedDate(),
          }"
        >
          {{ date }}
        </div>
      </div>
    </div>
    <AccMonth />
    <LogTable />
  </main>
</template>

<style scoped>
main {
  padding: 30px 30px 0px;
  background-color: var(--color-background);
  min-height: 100%;
}

.loading {
  height: 190px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  user-select: none;
}

.days .day {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--gray);
  font-size: 0.875rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 0 auto;
  transition: border-radius 0.2s ease-in-out;
}

.today {
  color: var(--cal-today) !important;
  border: 1px solid var(--cal-today);
}

.days > .day.selected {
  background-color: var(--color-primary) !important;
  color: var(--white) !important;
  font-weight: 700;
  border-radius: 50%;
  border: none;
}
</style>
