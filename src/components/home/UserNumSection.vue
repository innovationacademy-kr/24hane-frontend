<script setup lang="ts">
import UserNumCard from "@/components/home/UserNumCard.vue";
import { ref } from "vue";

const props = defineProps<{
  numberOfPeople: {
    gaepo: number;
    seocho: number;
  };
  isOnline: boolean;
}>();

const userNum = ref(props.numberOfPeople);
</script>

<template>
  <section class="userNumSection">
    <h2 :class="{ online: props.isOnline }">실시간 현황</h2>
    <div class="userNumCards">
      <UserNumCard class="m-8" :userNum="userNum.gaepo ?? 0">
        <template #title>개포</template>
      </UserNumCard>
      <UserNumCard class="m-8" :userNum="userNum.seocho ?? 0">
        <template #title>서초</template>
      </UserNumCard>
    </div>
  </section>
</template>

<style scoped>
.userNumSection {
  margin-top: 16px;
}

.userNumSection h2 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 8px;
}

.userNumSection h2.online {
  color: var(--white);
}

.userNumCards {
  display: flex;
  justify-content: center;
  grid-gap: 20px;
}
</style>
