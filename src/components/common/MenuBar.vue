<script setup lang="ts">
import HomeIconFill from "@/components/icons/IconHomeFill.vue";
import HomeIconLine from "@/components/icons/IconHomeLine.vue";
import CalendarIconFill from "@/components/icons/IconCalendarFill.vue";
import CalendarIconLine from "@/components/icons/IconCalendarLine.vue";
import MoreIconFill from "@/components/icons/IconMoreFill.vue";
import MoreIconLine from "@/components/icons/IconMoreLine.vue";
import { useMonthLogStore } from "@/stores/monthlog";

const monthLog = useMonthLogStore();
const { resetSelectedDate } = monthLog;
</script>

<template>
  <div class="wrap">
    <nav>
      <RouterLink to="/home">
        <HomeIconFill
          v-if="$route.name === 'home'"
          color="var(--color-background-btn)"
        />
        <HomeIconLine v-else />
      </RouterLink>
      <RouterLink to="/calendar">
        <CalendarIconFill
          v-if="$route.name === 'calendar'"
          @click="resetSelectedDate"
          color="var(--color-background-btn)"
        />
        <CalendarIconLine v-else />
      </RouterLink>
      <RouterLink to="/more">
        <MoreIconFill
          v-if="$route.name === 'more'"
          color="var(--color-background-btn)"
        />
        <MoreIconLine v-else />
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  filter: var(--menu-shadow);
  z-index: 9;
  padding: 0 30px;
  user-select: none;
  box-sizing: border-box;
}

.wrap::after {
  content: "";
  display: block;
  background-color: var(--color-background);
  height: env(safe-area-inset-bottom);
  overflow: hidden;
}

@media (min-width: 425px) {
  .wrap {
    max-width: 425px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (display-mode: standalone) {
  .wrap {
    height: 80px;
  }
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
}
nav a {
  display: block;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
