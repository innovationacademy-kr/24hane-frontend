<script setup lang="ts">
import UserNumCard from "@/components/home/UserNumCard.vue";

const props = defineProps<{
  numberOfPeople: {
    gaepo: number;
  };
  isOnline: boolean;
}>();
</script>

<template>
  <section class="userNumSection">
    <h2 :class="{ online: props.isOnline }">실시간 현황</h2>
    <div class="userNumCards">
      <UserNumCard class="m-8" :userNum="props.numberOfPeople.gaepo ?? 0">
        <template #title>서울</template>
      </UserNumCard>
    </div>
  </section>
</template>

<style scoped>
.userNumSection {
  margin-top: 16px;
  user-select: none;
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
