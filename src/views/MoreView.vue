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
        path="https://spot-tomato-468.notion.site/2022-42-SEOUL-bf0513c7197f4f71b4be968b8a2cd75a"
      >
        <template #image><BookIcon /></template>
      </NewPageItem>
      <NewPageItem
        title="출입기록 문의"
        path="https://docs.google.com/forms/d/e/1FAIpQLSc_-3n_YwQsR1ZNm5DEChDTABQtw884CuI5laekfDemMmjxow/viewform"
      >
        <template #image><ChatConversationIcon /></template>
      </NewPageItem>
      <NewPageItem
        title="이용 가이드"
        path="https://material-havarti-67f.notion.site/57465de14326429294859ba4a60d9c22"
      >
        <template #image><InfomationIcon /></template>
      </NewPageItem>
      <NewPageItem
        title="앱 피드백"
        path="https://docs.google.com/forms/u/0/d/1Lqs2cOwPdPa-9crMjhATesKpslDLC5XqJ92by_Qk-Qc/viewform?edit_requested=true"
      >
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
