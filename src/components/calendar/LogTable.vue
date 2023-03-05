<script setup lang="ts">
import { ref, watch } from "vue";
import { useMonthLogStore } from "@/stores/monthlog";
const {
  getSelectedDateAccTimeText,
  getDateLogs,
  showSelectedDateText,
  showIsLoading,
} = useMonthLogStore();

const logs = ref(getDateLogs());
const isLoading = ref(showIsLoading());

watch(showSelectedDateText, () => {
  logs.value = getDateLogs();
});

watch(showIsLoading, (val) => {
  isLoading.value = val;
  if (val == false) {
    logs.value = getDateLogs();
  }
});

const calcHeight = () => {
  const days = document.getElementById("days");
  const daysHeight = days?.clientHeight;
  const logs = document.getElementById("logs");
  if (!!logs && !!daysHeight && daysHeight > 190) {
    logs?.classList.add("smaller");
  } else {
    logs?.classList.remove("smaller");
  }
};

watch(getDateLogs, () => {
  calcHeight();
});
</script>

<template>
  <div class="wrap">
    <div class="totalLog">
      <div class="title">{{ showSelectedDateText() }}</div>
      <div class="time">{{ getSelectedDateAccTimeText() }}</div>
    </div>
    <div class="logList">
      <ul class="logTitle">
        <li>입실</li>
        <li>퇴실</li>
        <li>체류시간</li>
      </ul>
      <ul class="logs" v-if="isLoading">
        <li class="log logEmpty">기록이 없습니다.</li>
      </ul>
      <ul v-show="!isLoading" id="logs" class="logs">
        <li
          v-for="(log, i) in logs"
          :key="i"
          class="log"
          :class="{ missing: log.accLogTime === '누락' }"
        >
          <div class="inLogTime">{{ log.inLogTime }}</div>
          <div class="outLogTime">{{ log.outLogTime }}</div>
          <div class="accLogTime">{{ log.accLogTime }}</div>
        </li>
        <li class="log logEmpty" v-if="logs.length == 0">기록이 없습니다.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.totalLog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-more);
  border-bottom: 1px solid var(--color-border);
  padding: 0 10px;
}
.logList {
  padding: 10px 0;
}

.logTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 0.875rem;
  margin-bottom: 8px;
  padding: 0 10px;
}
.logTitle li {
  list-style: none;
  text-align: center;
  font-weight: 700;
  width: 65px;
}

.logs {
  font-size: 0.875rem;
  margin-bottom: 10px;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: calc(var(--vh, 1vh) * 100 - 514px);
  padding: 0 10px;
}

.logs.smaller {
  height: calc(var(--vh, 1vh) * 100 - 554px);
}

.logs .log {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 6px;
}
.logs .logEmpty {
  justify-content: center;
  font-size: 0.875rem;
}
.log div {
  width: 65px;
}
.log.missing {
  background-color: var(--color-log-bg);
  border-radius: 12px;
}
</style>
