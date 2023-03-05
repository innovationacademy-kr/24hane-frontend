<script setup lang="ts">
import LoadingAnimation from "@/components/common/LoadingAnimation.vue";
import { ref } from "vue";

const ORIGIN_URL = window.location.origin;
const BACKEND_URL = import.meta.env.VITE_APP_API_URL;
const isClicked = ref(false);
</script>

<template>
  <button class="button">
    <LoadingAnimation v-if="isClicked" />
    <a
      v-else
      @click="isClicked = true"
      :href="`${BACKEND_URL}/user/login/42?redirect=${ORIGIN_URL}/auth`"
      >LOG IN</a
    >
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--black);
  max-width: 330px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--white);
  font-weight: 700;
  padding: 0;
}
.button a {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
