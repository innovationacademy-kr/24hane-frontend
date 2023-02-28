<script setup lang="ts">
import { ref } from "vue";
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import DefaultButton from "@/components/common/DefaultButton.vue";
import VIcon from "@/components/icons/IconChevron.vue";

// 0: 안함
// 1: 신청
// 2: 제작
// 3: 완료
enum CardOrder {
  NONE = 0,
  APPLY = 1,
  PROGRESS = 2,
  COMPLETE = 3,
}

const progressIndex = ref(0);

const PROGRESS = [
  {
    name: "신청",
    title: "신청 후 업체에 입금해주세요",
    content: "업체에서 입금 확인 후 제작이 진행됩니다.",
  },
  {
    name: "제작",
    title: "제작은 약 2주간 소요됩니다",
    content: "출입카드 재발급 신청 후 업체에서 입금 확인 후 제작이 진행됩니다.",
  },
  {
    name: "완료",
    title: "카드를 수령해주세요",
    content: "재발급 카드는 데스크에서 수령가능합니다.",
  },
];

const ApplyCardButton = [
  {
    title: "카드 신청하기",
    background: "var(--color-primary)",
    color: "var(--white)",
    isDisable: false,
  },
  {
    title: "카드 신청하기",
    background: "var(--gray-soft)",
    color: "var(--white)",
    isDisable: true,
  },
  {
    title: "카드 신청하기",
    background: "var(--gray-soft)",
    color: "var(--white)",
    isDisable: true,
  },
  {
    title: "데스크 카드수령 완료",
    background: "var(--color-primary)",
    color: "var(--white)",
    isDisable: true,
  },
];

const clickApply = () => {
  console.log("카드 재발급 신청 버튼 클릭");
  progressIndex.value = CardOrder.APPLY;
};
</script>

<template>
  <HeaderBarSub title="카드 재발급 신청" :backButton="true" :path="'more'" />
  <main>
    <div>
      <h3>재발급 신청 방법</h3>
      <DefaultButton title="자세히 보기" path="https://naver.com" />
      <h3>재발급 신청 현황</h3>
      <div class="card">
        <ul>
          <li>
            <div
              class="progress"
              :class="{ on: progressIndex === CardOrder.APPLY }"
            >
              {{ PROGRESS[0].name }}
            </div>
            <div class="text">
              <div class="title">{{ PROGRESS[0].title }}</div>
              <div class="content">{{ PROGRESS[0].content }}</div>
            </div>
          </li>
          <VIcon class="vIcon" />
          <li>
            <div
              class="progress"
              :class="{ on: progressIndex === CardOrder.PROGRESS }"
            >
              {{ PROGRESS[1].name }}
            </div>
            <div class="text">
              <div class="title">{{ PROGRESS[1].title }}</div>
              <div class="content">{{ PROGRESS[1].content }}</div>
            </div>
          </li>
          <VIcon class="vIcon" />
          <li>
            <div
              class="progress"
              :class="{ on: progressIndex === CardOrder.COMPLETE }"
            >
              {{ PROGRESS[2].name }}
            </div>
            <div class="text">
              <div class="title">{{ PROGRESS[2].title }}</div>
              <div class="content">{{ PROGRESS[2].content }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <DefaultButton
      class="applyButton"
      @click="clickApply"
      :title="ApplyCardButton[progressIndex].title"
      :background="ApplyCardButton[progressIndex].background"
      :color="ApplyCardButton[progressIndex].color"
      :isDisable="ApplyCardButton[progressIndex].isDisable"
    />
  </main>
</template>

<style scoped>
main {
  padding: 70px 30px 80px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 20px 0 10px;
}

h3:first-child {
  margin-top: 0;
}

.card {
  padding: 30px 20px;
  background-color: var(--white);
  border-radius: 20px;
  color: var(--black);
}

.card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card ul li {
  display: flex;
  align-items: center;
}
.card ul li:last-child {
  margin-bottom: 0;
}

.progress {
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  border-radius: 50%;
  color: var(--gray);
  border: 4px solid var(--divider);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 0.875rem;
  font-weight: 700;
}

.progress.on {
  background-color: var(--color-primary);
  color: var(--white);
  border: none;
}

.text .title {
  font-weight: 700;
  line-height: 1;
  margin-bottom: 3px;
}

.text .content {
  font-size: 0.875rem;
  letter-spacing: -1px;
  line-height: 1.125rem;
}

.vIcon {
  transform: rotate(90deg);
  margin: 10px 17px;
  width: 16px;
  height: 16px;
}

.applyButton {
  margin-top: 30px;
}
</style>
