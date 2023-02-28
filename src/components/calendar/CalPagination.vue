<script setup lang="ts">
import VIcon from "@/components/icons/IconChevron.vue";
import { useMonthLogStore } from "@/stores/monthlog";
import { ref, watch } from "vue";

const monthLog = useMonthLogStore();
const {
  showDateTitle,
  calcOptions,
  nextMonth,
  prevMonth,
  selectMonth,
  showIsLoading,
} = monthLog;

const isLoading = ref(showIsLoading());
watch(showIsLoading, (val) => {
  isLoading.value = val;
});

const clickPrevMonth = () => {
  if (!isLoading.value) prevMonth();
};
const clickNextMonth = () => {
  if (!isLoading.value) nextMonth();
};
</script>

<template>
  <div class="pagination tapHighlight">
    <button @click="clickPrevMonth">
      <VIcon :color="`var(--color-vbutton)`" />
    </button>
    <select
      class="title select"
      @change="selectMonth"
      v-model="monthLog.dateTitle"
      name="year-month"
    >
      <option
        :disabled="isLoading"
        v-for="(date, i) in calcOptions()"
        :key="i"
        :value="date"
        :selected="showDateTitle() === date"
      >
        {{ date }}
      </option>
    </select>
    <button @click="clickNextMonth">
      <VIcon :color="`var(--color-vbutton)`" />
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.pagination button {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pagination button:first-child {
  transform: rotate(180deg);
}
.pagination .title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-family: var(--font-family);
}

.select {
  cursor: pointer;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
}
</style>
