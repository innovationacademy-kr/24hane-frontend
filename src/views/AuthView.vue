<script setup lang="ts">
import TextLogoIcon from "@/components/icons/IconTextLogo.vue";
import router from "@/router";
import { onMounted } from "vue";
import { getIsLogin } from "@/api/userAPI";
import { STATUS_204_NO_CONTENT } from "@/constants/statusCode";

onMounted(() => {
  const timeout = 1500;

  setTimeout(async () => {
    const isLogin = await getIsLogin();
    if (isLogin?.status === STATUS_204_NO_CONTENT) {
      localStorage.setItem("isLogin", "true");
      router.push("/home");
    } else {
      router.push("/");
      alert("로그인이 필요합니다.");
    }
  }, timeout);
});
</script>

<template>
  <div class="wrap">
    <TextLogoIcon />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: var(--color-background);
  padding: 30px;
}
</style>
