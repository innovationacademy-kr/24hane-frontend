<script setup lang="ts">
const props = defineProps<{
  title: string;
  path?: string;
  background?: string;
  color?: string;
  isDisable?: boolean;
}>();
</script>

<template>
  <button
    :disabled="isDisable"
    class="button"
    :style="{ background: background, color: color }"
  >
    <a v-if="path" :href="props.path" target="_blank">{{ props.title }}</a>
    <span v-else>{{ props.title }}</span>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--color-background-btn);
  color: var(--color-heading-on);
  width: 100%;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
}
.button a,
.button span {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
}
</style>
