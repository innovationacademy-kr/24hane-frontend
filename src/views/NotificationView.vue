<script setup lang="ts">
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import AlarmItem from "@/components/alarm/AlarmItem.vue";

interface Message {
  date: string;
  title: string;
  content: string;
}

const messages: Message[] = [];
</script>

<template>
  <main>
    <HeaderBarSub title="알림" :backButton="true" path="home" />
    <ul v-if="messages.length">
      <AlarmItem v-for="(msg, i) in messages" :message="msg" :key="i" />
    </ul>
    <ul v-else>
      <li class="empty">알림 내역이 비어있습니다. 💌</li>
    </ul>
  </main>
</template>

<style scoped>
main {
  padding: 70px 30px;
}

ul {
  padding: 0;
}
li.empty {
  list-style: none;
  border-bottom: 1px solid var(--color-border);
  padding: 6px 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.875rem;
}
</style>
