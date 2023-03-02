<script setup lang="ts">
const props = defineProps<{
  userNum: number;
}>();
</script>

<template>
  <div class="wrap">
    <h2>
      <slot name="title"></slot>
    </h2>
    <div class="userNum">
      {{ props.userNum }}<span class="timeUnit">명</span>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
}
.userNum {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
}
.timeUnit {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
}
</style>
