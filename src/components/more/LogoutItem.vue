<script setup lang="ts">
import router from "@/router";
import { removeCookie } from "@/api/cookie/cookies";
import { clearStorage } from "@/utils/localStorage";

const clickLogout = () => {
  removeCookie();
  router.push("/");
  clearStorage();
};
</script>

<template>
  <li @click="clickLogout">
    <div class="imageBox">
      <slot name="image"></slot>
    </div>
    <span class="title">로그아웃</span>
  </li>
</template>

<style scoped>
li {
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
