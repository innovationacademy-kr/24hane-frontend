<script setup lang="ts">
import { onMounted, ref } from "vue";
import HeaderBarSub from "@/components/common/HeaderBarSub.vue";
import DefaultButton from "@/components/common/DefaultButton.vue";
import VIcon from "@/components/icons/IconChevron.vue";
import DefaultModal from "@/components/common/DefaultModal.vue";
import {
  getReissue,
  setReissueRequest,
  setReissueFinish,
} from "@/api/reissueAPI";
import LoadingAnimation from "@/components/common/LoadingAnimation.vue";

// 0: 없음
// 1: 신청
// 2: 제작
// 3: 완료
enum CardOrder {
  NONE = 0,
  APPLY = 1,
  PROGRESS = 2,
  COMPLETE = 3,
}

// api 받아와서 적용해야하는 부분
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
    isDisable: false,
  },
];

const isLoading = ref(false);

const getProgress = async () => {
  isLoading.value = true;
  const { data } = await getReissue();
  if (data.state == "none" || data.state == "done") {
    progressIndex.value = CardOrder.NONE;
  } else if (data.state === "apply") {
    progressIndex.value = CardOrder.APPLY;
  } else if (data.state === "in_progress") {
    progressIndex.value = CardOrder.PROGRESS;
  } else if (data.state === "pick_up_requested") {
    progressIndex.value = CardOrder.COMPLETE;
  }
  isLoading.value = false;
};

onMounted(() => {
  getProgress();
});

const isApplyBtnClick = ref(false);

const clickApply = () => {
  isApplyBtnClick.value = true;
};

const isClick = ref(false);

const confirmApply = async () => {
  if (isClick.value) return;
  isClick.value = true;
  try {
    const response = await setReissueRequest();
    if (response.status === 200 || response.status === 201) {
      progressIndex.value = CardOrder.APPLY;
      isApplyBtnClick.value = false;
      isClick.value = false;
    }
  } catch (error) {
    alert("카드 신청에 실패했습니다.");
    isApplyBtnClick.value = false;
    isClick.value = false;
  }
};

const confirmReceiptCard = async () => {
  if (isClick.value) return;
  isClick.value = true;
  try {
    const response = await setReissueFinish();
    if (response.status === 200 || response.status === 201) {
      progressIndex.value = CardOrder.NONE;
      isApplyBtnClick.value = false;
      isClick.value = false;
    }
  } catch (error) {
    alert("카드 수령 확인에 실패했습니다.");
    isApplyBtnClick.value = false;
    isClick.value = false;
  }
};

const selectButtonBackground = () => {
  if (isLoading.value) {
    return ApplyCardButton[1].background;
  } else {
    return ApplyCardButton[progressIndex.value].background;
  }
};

const selectButtonColor = () => {
  if (isLoading.value) {
    return ApplyCardButton[1].color;
  } else {
    return ApplyCardButton[progressIndex.value].color;
  }
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
        <LoadingAnimation v-if="isLoading" />
        <ul v-else>
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
          <VIcon class="vIcon" color="var(--gray-soft)" />
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
          <VIcon class="vIcon" color="var(--gray-soft)" />
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
      :background="selectButtonBackground()"
      :color="selectButtonColor()"
      :isDisable="ApplyCardButton[progressIndex].isDisable"
    />
  </main>
  <DefaultModal v-if="isApplyBtnClick && progressIndex === CardOrder.NONE">
    <template #title
      >카드 재발급을<br />
      신청하시겠습니까?</template
    >
    <template #content>신청 후 취소가 불가능합니다.</template>
    <template #button>
      <DefaultButton
        v-if="!isClick"
        title="네, 신청하겠습니다"
        background="var(--color-primary)"
        color="var(--white)"
        @click="confirmApply"
      />
      <div v-else class="fakeButton">
        <LoadingAnimation />
      </div>
      <DefaultButton
        title="취소"
        background="var(--divider)"
        color="var(--black)"
        marginTop="10px"
        @click="isApplyBtnClick = false"
      />
    </template>
  </DefaultModal>
  <DefaultModal v-if="isApplyBtnClick && progressIndex === CardOrder.COMPLETE">
    <template #title
      >저는 카드를 받았음을<br />
      확인했습니다.</template
    >
    <template #content>실물 카드를 받은 후 눌러 주세요.</template>
    <template #button>
      <DefaultButton
        v-if="!isClick"
        title="네, 확인했습니다"
        background="var(--color-primary)"
        color="var(--white)"
        @click="confirmReceiptCard"
      />
      <div v-else class="fakeButton">
        <LoadingAnimation />
      </div>
      <DefaultButton
        title="취소"
        background="var(--divider)"
        color="var(--black)"
        marginTop="10px"
        @click="isApplyBtnClick = false"
      />
    </template>
  </DefaultModal>
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
  height: 300px;
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

.fakeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  width: 100%;
  height: 45px;
  border-radius: 10px;
}
</style>
