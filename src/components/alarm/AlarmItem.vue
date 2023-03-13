<script setup lang="ts">
const props = defineProps<{
  message: {
    date: string;
    title: string;
    content: string;
  };
}>();
</script>

<template>
  <li class="alarmItem">
    <div class="date">{{ props.message.date }}</div>
    <h3>{{ props.message.title }}</h3>
    <p>{{ props.message.content }}</p>
  </li>
</template>

<style scoped>
.alarmItem {
  list-style: none;
  border-bottom: 1px solid var(--color-border);
  padding: 6px 0;
  margin-bottom: 10px;
  text-align: left;
}

.alarmItem .date {
  font-size: 0.75rem;
  color: var(--color-text-more);
}

.alarmItem h3 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 2px 0;
}
.alarmItem p {
  font-size: 0.75rem;
  color: var(--color-text);
  margin: 2px 0;
}
</style>
