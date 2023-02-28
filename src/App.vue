<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import MenuBar from "@/components/common/MenuBar.vue";
import HeaderBar from "@/components/common/HeaderBar.vue";

const route = useRoute();

const checkValidRoute = (visibleRoutes: string[]) => {
  return visibleRoutes.includes(route.name as string);
};
</script>

<template>
  <HeaderBar v-if="checkValidRoute(['home'])" />
  <RouterView />
  <MenuBar
    v-if="
      checkValidRoute([
        'home',
        'calendar',
        'more',
        'notification',
        'apply-card',
      ])
    "
  />
</template>

<style scoped>
main {
  padding: 30px 30px 80px;
  background-color: var(--color-background-soft);
  min-height: 100%;
}
</style>
