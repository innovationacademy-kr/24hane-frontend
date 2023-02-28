<script setup lang="ts">
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import AlarmItem from "@/components/alarm/AlarmItem.vue";

interface Message {
  date: string;
  title: string;
  content: string;
}

const messages: Message[] = [];
/* const messages = [
  {
    date: "2.13",
    title: "🏃‍♂️ 오늘도 힘차게 클러스터를 가볼까요?",
    content: "7일 연속 출석 중이네요! inshin 님을 응원합니다.",
  },
  {
    date: "2.5",
    title: "🥲 클러스터 안나간지 벌써 이틀이 지났어요.",
    content:
      "오늘은 클러스터 나오실거죠? 활기찬 하루를 클러스터에서 시작해볼까요!",
  },
  {
    date: "1.25",
    title: "💸 오늘은 지원금이 들어오는 날입니다.",
    content: "저번 한 달도 출석잘하셨나요? 이번 달도 꾸준한 출석 기대해요!",
  },
  {
    date: "1.24",
    title: "🤔 이용가이드 읽어보기",
    content:
      "24HANE 서비스가 새롭게 개편되었습니다.  어떻게 바뀌었는지 살펴 볼까요?",
  },
]; */
</script>

<template>
  <main>
    <HeaderBarSub title="알림" :backButton="true" />
    <ul v-if="messages.length">
      <AlarmItem v-for="(msg, i) in messages" :message="msg" :key="i" />
    </ul>
    <ul v-else>
      <li class="empty">알림 내역이 비어있습니다.</li>
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
