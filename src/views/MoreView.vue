<script setup lang="ts">
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import PageItem from "@/components/more/PageItem.vue";
import NewPageItem from "@/components/more/NewPageItem.vue";
import LogoutItem from "@/components/more/LogoutItem.vue";
import FooterItem from "@/components/more/FooterItem.vue";
import ChatConversationIcon from "@/components/icons/IconChatConversation.vue";
import InfomationIcon from "@/components/icons/IconInfomationCircle.vue";
import UserVoiceIcon from "@/components/icons/IconUserVoice.vue";
import CardIcon from "@/components/icons/IconCard.vue";
import BookIcon from "@/components/icons/IconBook.vue";
import LogoutIcon from "@/components/icons/IconLogout.vue";
import {
  moneyHuidelinesURL,
  questionURL,
  usageURL,
  feedbackURL,
} from "@/api/redirectAPI";

const backendUrl = import.meta.env.VITE_APP_API_URL;
</script>

<template>
  <main>
    <HeaderBarSub title="더보기" />
    <ul>
      <PageItem title="카드 재발급 신청" path="/apply-card">
        <template #image><CardIcon /></template>
      </PageItem>
      <NewPageItem
        title="지원금 지침 안내"
        :path="backendUrl + moneyHuidelinesURL"
      >
        <template #image><BookIcon /></template>
      </NewPageItem>
      <NewPageItem title="출입기록 문의" :path="backendUrl + questionURL">
        <template #image><ChatConversationIcon /></template>
      </NewPageItem>
      <NewPageItem title="이용 가이드" :path="backendUrl + usageURL">
        <template #image><InfomationIcon /></template>
      </NewPageItem>
      <NewPageItem title="앱 피드백" :path="backendUrl + feedbackURL">
        <template #image><UserVoiceIcon /></template>
      </NewPageItem>
      <LogoutItem>
        <template #image><LogoutIcon /></template>
      </LogoutItem>
      <FooterItem />
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

li {
  list-style: none;
}
</style>
