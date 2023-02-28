<script setup lang="ts">
import LoginButton from "@/components/Login/LoginButton.vue";
import LogoIcon from "@/components/icons/IconLogo.vue";
</script>

<template>
  <div class="wrap">
    <div class="logoBox">
      <LogoIcon />
    </div>
    <div class="buttonWrap">
      <div class="notice">
        <p>입실과 퇴실의 짝이 일치하는 경우에만 출입 누적시간이 반영됩니다.</p>
        <p>입/퇴실 시 출입카드를 꼭 태깅해 주세요.</p>
      </div>
      <LoginButton class="button" />
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-background);
  padding: 30px;
  background: linear-gradient(
    45deg,
    rgba(115, 92, 242, 1),
    rgba(14, 167, 169, 0.4)
  );
}

.logoBox {
  width: 140px;
  height: 140px;
}

.logoBox svg {
  width: 100%;
  height: 100%;
}

.buttonWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.notice {
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-heading);
  font-weight: 700;
}

.notice p {
  color: #fff;
}

.button {
  margin-top: 30px;
}
</style>
