<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <div class="loading"></div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.loading {
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--gray-soft);
  animation: loading 1.2s infinite ease-in;
  animation-delay: 0.4s;
}
.loading:before,
.loading:after {
  content: "";
  position: absolute;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--gray-soft);
  top: 50%;
  transform: translateY(-50%);
  animation: loading 1.2s infinite linear;
}
.loading:before {
  left: -12px;
}
.loading:after {
  left: 12px;
  animation-delay: 0.8s;
}

@keyframes loading {
  50% {
    background: var(--color-primary);
  }
}
</style>
