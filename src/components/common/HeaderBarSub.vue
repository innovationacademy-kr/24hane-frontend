<script setup lang="ts">
import VIcon from "@/components/icons/IconChevron.vue";
const props = defineProps<{
  title: string;
  backButton?: boolean;
  path?: string;
}>();
</script>

<template>
  <div class="wrap" :class="{ backButton: backButton }">
    <router-link v-if="props.backButton" :to="path ?? 'home'">
      <VIcon :color="`var(--color-vbutton)`" class="vIcon" />
    </router-link>
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 2rem;
  padding: 15px 30px 0;
  z-index: 9;
  background-color: var(--color-background-soft);
}

@media (min-width: 425px) {
  .wrap {
    max-width: 425px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.wrap.backButton h2 {
  text-align: center;
}

a {
  position: absolute;
  bottom: 2px;
  left: 16px;
  display: block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.vIcon {
  transform: rotate(180deg);
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
