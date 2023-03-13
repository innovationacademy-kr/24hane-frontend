<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import MenuBar from "@/components/common/MenuBar.vue";
import HeaderBar from "@/components/common/HeaderBar.vue";

const route = useRoute();

const checkValidRoute = (visibleRoutes: string[]) => {
  return visibleRoutes.includes(route.name as string);
};

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onMounted(() => {
  setScreenSize();
});
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
