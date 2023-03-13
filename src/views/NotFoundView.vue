<script setup lang="ts">
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import AttentionTriangleIcon from "@/components/icons/IconAttentionTriangle.vue";
</script>

<template>
  <main>
    <HeaderBarSub title="404" :backButton="true" />
    <AttentionTriangleIcon />
    <h3>
      원하시는 페이지를<br />
      찾을 수 없습니다
    </h3>
    <p>
      요청하신 페이지를 찾을 수 없거나<br />
      잘못된 경로를 이용하셨습니다.
    </p>
  </main>
</template>

<style scoped>
main {
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 20px 0 10px;
  font-size: 1.125rem;
  line-height: 1.6rem;
  font-weight: 700;
  text-align: center;
}

p {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  main svg {
    filter: invert(1);
  }
}
</style>
