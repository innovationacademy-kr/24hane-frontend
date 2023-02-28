<script setup lang="ts">
const props = defineProps<{
  title: string;
  path: string;
}>();
</script>

<template>
  <li>
    <RouterLink class="link" :to="props.path">
      <div class="imageBox">
        <slot name="image"></slot>
      </div>
      <span class="title">{{ props.title }}</span>
    </RouterLink>
  </li>
</template>

<style scoped>
li .link {
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
  cursor: pointer;
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
