<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();
</script>

<template>
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.792894 11.7071C0.402369 11.3166 0.402369 10.6834 0.792894 10.2929L5.08579 6L0.792893 1.70711C0.402368 1.31658 0.402368 0.683417 0.792893 0.292893C1.18342 -0.0976315 1.81658 -0.0976315 2.20711 0.292893L7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792894 11.7071Z"
      v-bind:fill="props.color ? props.color : '#9B9797'"
    />
  </svg>
</template>
