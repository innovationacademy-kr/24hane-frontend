<script setup lang="ts">
const props = defineProps<{
  title: string;
  path: string;
}>();
</script>

<template>
  <li>
    <a :href="props.path" target="_blank">
      <div class="imageBox">
        <slot name="image"></slot>
      </div>
      <span class="title">{{ props.title }}</span>
    </a>
  </li>
</template>

<style scoped>
li a {
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
}

.imageBox {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

span.title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-more);
}

a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
