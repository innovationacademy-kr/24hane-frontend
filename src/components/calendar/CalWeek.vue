<script setup lang="ts"></script>

<template>
  <div class="week">
    <div class="day">일</div>
    <div class="day">월</div>
    <div class="day">화</div>
    <div class="day">수</div>
    <div class="day">목</div>
    <div class="day">금</div>
    <div class="day">토</div>
  </div>
</template>

<style scoped>
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  user-select: none;
}

.week .day {
  font-size: 0.75rem;
  text-align: center;
  color: var(--gray);
  color: var(--color-text-more);
}
</style>
